import React, { useState } from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import ReportCard from "../components/ReportCard";
import data from "../data/data";
import { colors } from "../modules/colors";
import NavigationBar from "../components/NavigationBar";
import SettingsIcon from "../../assets/react-svgs/Settings";
import TimeIcon from "../../assets/react-svgs/Time";
import EmptyGraphic from "../components/EmptyGraphic";

const width = Dimensions.get("window").width;

const ReportsContainer = styled.View`
  padding: ${width / 20}px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Reports = styled.FlatList`
  background-color: ${colors.appBackground};
`;

const ReportsScreen = ({ navigation, reportData }) => {
  const [reports, setReports] = useState(data);
  const [empty, setEmpty] = useState(reports.length === 0);

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

  const removeCard = (id, save) => {
    console.log("removed card");
    reports.splice(
      reports.findIndex(item => item.id === id),
      1
    );
    setReports(reports);

    if (!reports.length) {
      setEmpty(true);
    }
  };

  return (
    <>
      <NavigationBar
        navigation={navigation}
        leftNav={navSettings.left}
        rightNav={navSettings.right}
        navDots={navSettings.dots}
      />
      <ReportsContainer>
        {reports.map((report, key) => {
          return (
            <ReportCard
              report={report}
              key={key}
              removeCard={({ id, save }) => removeCard(id, save)}
            />
          );
        })}
        {empty && <EmptyGraphic />}
      </ReportsContainer>
    </>
  );
};

export default ReportsScreen;
