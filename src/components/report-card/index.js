import React from "react";
import styled from "styled-components/native";
import { colors } from "../../modules/colors";

const ReportCard = ({ datetime = "", beach = "" }) => {
  const ReportCard = styled.TouchableOpacity`
    background-color: ${colors.componentBackground};
    margin-bottom: 24px;
    border-radius: 10px;
    box-shadow: 6px 6px 2px #b8a1a129;
    padding: 15px;
  `;

  const DateTimeText = styled.Text`
    margin-bottom: 8px;
    color: ${colors.fontColorSecondary};
    font-weight: bold;
    font-size: 16px;
  `;

  const BeachText = styled.Text`
    margin-bottom: 24px;
    color: ${colors.fontColorPrimary};
    font-weight: bold;
    font-size: 16px;
  `;

  return (
    <ReportCard>
      <DateTimeText>{datetime}</DateTimeText>
      <BeachText>{beach}</BeachText>
    </ReportCard>
  );
};

export default ReportCard;
