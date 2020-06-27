import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import ReportCard from "../components/report-card/index";
import data from "../data/data";
import { colors } from "../modules/colors";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ReportsContainer = styled.View`
  padding: ${width / 30}px;
`;

const Reports = styled.FlatList`
  background-color: ${colors.appBackground};
`;

const Heading = styled.Text`
  font-size: 16px;
  padding-bottom: 4px;
  color: ${colors.fontColorPrimary};
`;

const ReportsScreen = ({ navigation }) => {
  return (
    <ReportsContainer>
      <Reports
        data={data}
        renderItem={({ item, index, separators }) => <ReportCard id={index} />}
      />
    </ReportsContainer>
  );
};

export default ReportsScreen;
