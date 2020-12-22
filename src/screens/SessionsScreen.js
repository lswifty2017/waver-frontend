import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { colors } from "../modules/colors";
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Heading = styled.Text`
  font-size: 30px;
  padding: 20px;
  text-align: center;
  color: ${colors.fontColorSecondary};
`;

const SessionsScreen = ({ navigation }) => {


  return (
    <GestureRecognizer
      onSwipeRight={() => navigation.navigate('Reports')}

    >
      <Heading>Sessions</Heading>
    </GestureRecognizer>
  );
};

export default SessionsScreen;
