import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import ReportCard from "../components/ReportCard";
import data from "../data/data";
import { colors } from "../modules/colors";
import NavigationBar from "../components/NavigationBar";
import SettingsIcon from "../../assets/react-svgs/Settings";
import TimeIcon from "../../assets/react-svgs/Time";
import GestureRecognizer, {
  swipeDirections
} from "react-native-swipe-gestures";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

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
  const onSwipe = direction => {
    switch (direction) {
      case "left":
        navigation.navigate("Sessions", { transition: "vertical" });
        break;
      case "right":
        navigation.navigate("Preferences");
      default:
        break;
    }
  };

  return (
    <GestureRecognizer
      onSwipeLeft={() => onSwipe("left")}
      onSwipeRight={() => onSwipe("right")}
    >
      <NavigationBar
        navigation={navigation}
        leftNav={navSettings.left}
        rightNav={navSettings.right}
        navDots={navSettings.dots}
      />
      <ReportsContainer>
        <Reports
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index, separators }) => <ReportCard {...item} />}
        />
      </ReportsContainer>
    </GestureRecognizer>
  );
};

export default ReportsScreen;
