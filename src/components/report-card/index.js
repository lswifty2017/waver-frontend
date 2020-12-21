import React from "react";
import styled from "styled-components/native";
import { colors } from "../../modules/colors";
import shoulderHeadWaves from "../../../assets/icons/shoulder-head-waves.png";

const ReportCard = ({
  dateTime,
  beach,
  surfHeight,
  tide,
  windSpeed,
  windDirection
}) => {
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

  const ReportIcons = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 10px;
  `;
  const ReportIcon = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: ${80 / 2}px;
    padding: 10px;
  `;

  return (
    <ReportCard>
      <DateTimeText>{dateTime}</DateTimeText>
      <BeachText>{beach}</BeachText>
      <ReportIcons>
        <ReportIcon source={shoulderHeadWaves}></ReportIcon>
        <ReportIcon></ReportIcon>
        <ReportIcon></ReportIcon>
      </ReportIcons>
    </ReportCard>
  );
};

export default ReportCard;
