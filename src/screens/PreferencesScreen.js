import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { colors } from "../modules/colors";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Heading = styled.Text`
  font-size: 30px;
  padding: 20px;
  text-align: center;
  color: ${colors.fontColorSecondary};
`;

const PreferencesScreen = ({ navigation, reportData }) => {
  return (
    <Heading>Preferences</Heading>
  );
};

export default PreferencesScreen;
