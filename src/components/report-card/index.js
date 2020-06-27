import React from "react";
import styled from "styled-components/native";
import { colors } from "../../modules/colors";

const ReportCard = ({ datetime = "", beach = "", id }) => {
  const ReportCard = styled.TouchableOpacity`
    background-color: ${colors.componentBackground};
    margin-bottom: 24px;
    border-radius: 10px;
    box-shadow: 6px 6px 2px #b8a1a129;
  `;

  const DateTimeText = styled.Text`
    margin-bottom: 8px;
    color: ${colors.fontColorSecondary};
  `;

  const BeachText = styled.Text`
    margin-bottom: 24px;
    color: ${colors.fontColorPrimary};
  `;

  return (
    <ReportCard key={id}>
      <DateTimeText>{datetime}</DateTimeText>
      <BeachText>{beach}</BeachText>
    </ReportCard>
  );
};

export default ReportCard;
