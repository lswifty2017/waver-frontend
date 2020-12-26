import React from "react";
import styled from "styled-components/native";
import { colors } from "../modules/colors";
import ReportIcon from "../components/ReportIcon";
import BeachInfographic from "../components/BeachInfographic";
import Button from "../components/Button";
import { Shaka, FingerWalk } from "../../assets/react-svgs/index";

const ReportCardWrapper = styled.TouchableOpacity`
  background-color: ${colors.componentBackground};
  margin-bottom: 24px;
  border-radius: 10px;
  box-shadow: 6px 6px 2px #b8a1a129;
  padding: 15px;
`;

const ReportIcons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
`;

const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 12px;
`;

const HeaderText = styled.Text`
  color: ${({ secondary }) =>
    secondary ? colors.fontColorSecondary : colors.fontColorPrimary};
  font-weight: bold;
  font-size: 16px;
`;

const ButtonsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ReportCard = ({
  dateTime,
  beach,
  surfHeight,
  tide,
  windSpeed,
  windDirection
}) => {
  return (
    <ReportCardWrapper>
      <Header>
        <HeaderText secondary={true}>{dateTime}</HeaderText>
        <HeaderText>{beach}</HeaderText>
      </Header>
      <ReportIcons>
        <ReportIcon surfHeight={surfHeight}></ReportIcon>
        <ReportIcon
          windConditions={{ speed: windSpeed, direction: windDirection }}
        ></ReportIcon>
        <ReportIcon tideConditions={{ currentTide: tide }}></ReportIcon>
      </ReportIcons>
      <BeachInfographic />
      <ButtonsContainer>
        <Button svg={<FingerWalk />} />
        <Button svg={<Shaka />} />
      </ButtonsContainer>
    </ReportCardWrapper>
  );
};

export default ReportCard;
