import React, { useState } from "react";
import { Dimensions, Animated, PanResponder } from "react-native";
import styled from "styled-components/native";
import { colors } from "../modules/colors";
import ReportIcon from "../components/ReportIcon";
import BeachInfographic from "../components/BeachInfographic";
import Button from "../components/Button";
import { Shaka, FingerWalk } from "../../assets/react-svgs/index";

const SCREEN_WIDTH = Dimensions.get("window").width;

const ReportCardWrapper = styled.TouchableOpacity`
  background-color: ${colors.componentBackground};
  margin-bottom: 24px;
  border-radius: 10px;
  box-shadow: 6px 6px 2px #b8a1a129;
  padding: 15px;
`;

const ReportIcons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
`;

const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 12px;
`;

const HeaderText = styled.Text`
  color: ${({ secondary }) =>
    secondary ? colors.fontColorSecondary : colors.fontColorPrimary};
  font-weight: bold;
  font-size: 16px;
`;

const ButtonsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ReportCard = ({ report, removeCard }) => {
  const {
    id,
    dateTime,
    beach,
    surfHeight,
    tide,
    windSpeed,
    windDirection
  } = report;

  const [xPosition, setXPosition] = useState(new Animated.Value(0));
  let swipeDirection = "";
  const cardOpacity = new Animated.Value(1);
  const rotateCard = xPosition.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: ["-20deg", "0deg", "20deg"]
  });

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => false,
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
    onPanResponderMove: (evt, gestureState) => {
      xPosition.setValue(gestureState.dx);
      if (gestureState.dx > SCREEN_WIDTH - 250) {
        swipeDirection = "Right";
      } else if (gestureState.dx < -SCREEN_WIDTH + 250) {
        swipeDirection = "Left";
      }
    },
    onPanResponderRelease: (evt, gestureState) => {
      if (
        gestureState.dx < SCREEN_WIDTH - 250 &&
        gestureState.dx > -SCREEN_WIDTH + 250
      ) {
        Animated.spring(xPosition, {
          toValue: 0,
          speed: 5,
          bounciness: 10,
          useNativeDriver: false
        }).start();
      } else if (gestureState.dx > SCREEN_WIDTH - 250) {
        Animated.parallel([
          Animated.timing(xPosition, {
            toValue: SCREEN_WIDTH,
            duration: 200,
            useNativeDriver: false
          }),
          Animated.timing(cardOpacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false
          })
        ]).start(() => {
          removeCard({ id: id, save: true });
        });
      } else if (gestureState.dx < -SCREEN_WIDTH + 250) {
        Animated.parallel([
          Animated.timing(xPosition, {
            toValue: -SCREEN_WIDTH,
            duration: 200,
            useNativeDriver: false
          }),
          Animated.timing(cardOpacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false
          })
        ]).start(() => {
          removeCard({ id: id, save: false });
        });
      }
    }
  });

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[
        {
          justifyContent: "center",
          alignItems: "center",
          position: "absolute"
        },
        {
          opacity: cardOpacity,
          transform: [{ translateX: xPosition }, { rotate: rotateCard }]
        }
      ]}
    >
      <ReportCardWrapper>
        <Header>
          <HeaderText secondary={true}>{dateTime}</HeaderText>
          <HeaderText>{beach}</HeaderText>
        </Header>
        <ReportIcons>
          <ReportIcon surfHeight={surfHeight}></ReportIcon>
          <ReportIcon
            windConditions={{ speed: windSpeed, direction: windDirection }}
          ></ReportIcon>
          <ReportIcon tideConditions={{ currentTide: tide }}></ReportIcon>
        </ReportIcons>
        <BeachInfographic />
        <ButtonsContainer>
          <Button svg={<FingerWalk />} />
          <Button svg={<Shaka />} />
        </ButtonsContainer>
      </ReportCardWrapper>
    </Animated.View>
  );
};

export default ReportCard;
