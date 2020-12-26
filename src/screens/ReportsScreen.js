import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import ReportCard from "../components/ReportCard";
import data from "../data/data";
import { colors } from "../modules/colors";
import NavigationBar from "../components/NavigationBar";
import SettingsIcon from "../../assets/react-svgs/Settings";
import TimeIcon from "../../assets/react-svgs/Time";

const width = Dimensions.get("window").width;

const ReportsContainer = styled.View`
  padding: ${width / 20}px;
`;

const Reports = styled.FlatList`
  background-color: ${colors.appBackground};
`;

const navSettings = {
  left: {
    icon: <SettingsIcon width={30} height={30} fill={colors.white} />,
    text: "Preferences",
    path: "Preferences"
  },
  right: {
    icon: <TimeIcon width={30} height={30} fill={colors.white} />,
    text: "Sessions",
    path: "Sessions"
  },
  dots: {
    total: 3,
    activeDot: 2
  }
};

const ReportsScreen = ({ navigation, reportData }) => {
  return (
    <>
      <NavigationBar
        navigation={navigation}
        leftNav={navSettings.left}
        rightNav={navSettings.right}
        navDots={navSettings.dots}
      />
      <ReportsContainer>
        <ReportCard {...data[0]} />
      </ReportsContainer>
    </>
  );
};

export default ReportsScreen;
