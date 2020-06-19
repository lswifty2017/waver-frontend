import React from "react";
import styled from "styled-components/native";
import { StatusBar } from "react-native";
import HomeScreen from "./src/views/home-screen";
import { colors } from "./src/modules/colors";
import { fonts } from "./src/modules/fonts";

const AppContainer = styled.View`
  flex: 1;
  background-color: ${colors.appBackground};
  align-items: center;
  font-family: ${fonts.primaryFontFamily};
  color: ${colors.fontColorPrimary};
`;

export default function App() {
  return (
    <AppContainer>
      <HomeScreen />
      <StatusBar hidden={true} />
    </AppContainer>
  );
}
