import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { colors } from "../modules/colors";
import NavigationBar from "../components/NavigationBar";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Wrapper = styled.View`
  background-color: ${colors.white};
`;

const PreferencesScreen = ({ navigation, reportData }) => {
  return (
    <Wrapper>
      <NavigationBar
        navigation={navigation}
        navDots={{
          total: 3,
          activeDot: 1,
          title: "Preferences"
        }}
        color={colors.appBackground}
      />
    </Wrapper>
  );
};

export default PreferencesScreen;
