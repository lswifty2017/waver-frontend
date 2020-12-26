import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { colors } from "../modules/colors";
import NavigationDots from "../components/NavigationDots";
import GestureRecognizer, {
  swipeDirections
} from "react-native-swipe-gestures";

const NavgationBarContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 24px 12px 12px;
`;

const NavigationButton = styled.TouchableOpacity`
  display: flex;
  align-items: ${props =>
    props.alignment === "left" ? "flex-start" : "flex-end"};
  padding: 8px 8px 0;
`;

const NavigationButtonText = styled.Text`
  color: ${colors.white};
  margin-top: 4px;
`;

const NavigationBar = ({ navigation, leftNav, rightNav, navDots, color }) => {
  const onSwipe = direction => {
    switch (direction) {
      case "right":
        navigation.navigate(leftNav.path, { transition: "vertical" });
        break;
      case "left":
        navigation.navigate(rightNav.path);
      default:
        break;
    }
  };

  return (
    <GestureRecognizer
      onSwipeLeft={() => rightNav && onSwipe("left")}
      onSwipeRight={() => leftNav && onSwipe("right")}
    >
      <NavgationBarContainer>
        <View>
          {leftNav && (
            <NavigationButton
              alignment="left"
              onPress={() => navigation.navigate(leftNav.path)}
            >
              {leftNav.icon}
              <NavigationButtonText>{leftNav.text}</NavigationButtonText>
            </NavigationButton>
          )}
        </View>
        {navDots && (
          <NavigationDots
            total={navDots.total}
            title={navDots.title}
            activeDot={navDots.activeDot}
            color={color}
          />
        )}
        <View>
          {rightNav && (
            <NavigationButton
              onPress={() => navigation.navigate(rightNav.path)}
            >
              {rightNav.icon}
              <NavigationButtonText>{rightNav.text}</NavigationButtonText>
            </NavigationButton>
          )}
        </View>
      </NavgationBarContainer>
    </GestureRecognizer>
  );
};

export default NavigationBar;
