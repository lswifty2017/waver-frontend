import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import ReportCard from "../components/report-card/index";
import data from "../data/data";
import { colors } from "../modules/colors";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ReportsContainer = styled.View`
  padding: ${width / 20}px;
`;

const Reports = styled.FlatList`
  background-color: ${colors.appBackground};
`;

const Heading = styled.Text`
  font-size: 16px;
  padding-bottom: 4px;
  color: ${colors.fontColorPrimary};
`;

const ReportsScreen = ({ navigation, reportData }) => {
  return (
    <ReportsContainer>
      <Reports
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index, separators }) => <ReportCard {...item} />}
      />
    </ReportsContainer>
  );
};

export default ReportsScreen;
