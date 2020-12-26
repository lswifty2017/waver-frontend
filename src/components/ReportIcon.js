import React from "react";
import styled from "styled-components/native";
import { colors } from "../modules/colors";
import {
  ShoulderHighSurfIcon,
  AnkleHighSurfIcon,
  MidHighTideIcon,
  CleanIcon,
  WindIcon
} from "../../assets/icons/index";

const ReportIconWrapper = styled.Image`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ size }) => size / 2}px;
  margin: 10px;
  border-width: 3px;
  border-color: ${colors.white};
  resize-mode: contain;
`;

const ReportIcon = ({
  surfHeight,
  windConditions,
  tideConditions,
  size = 90
}) => {
  let reportIcon = ShoulderHighSurfIcon;

  if (surfHeight) {
    if (surfHeight <= 1) reportIcon = AnkleHighSurfIcon;
    else if (surfHeight > 1 && surfHeight <= 3)
      reportIcon = ShoulderHighSurfIcon;
  }

  if (windConditions) {
    // Wind logic to be implemented
    const { speed, direction } = windConditions;
    if (speed < 10) {
      reportIcon = CleanIcon;
    } else {
      reportIcon = WindIcon;
    }
  }

  if (tideConditions) {
    const { currentTide, maxTide, minTide, rising } = tideConditions;
    const tideRange = maxTide - minTide;

    // Tide logic to be implemented

    reportIcon = MidHighTideIcon;
  }

  return (
    <ReportIconWrapper size={size} source={reportIcon}></ReportIconWrapper>
  );
};

export default ReportIcon;
