import React from "react";
import styled from "styled-components/native";
import { colors } from "../../modules/colors";
import shoulderHeadWaves from "../../../assets/icons/shoulder-head-waves.png";
import ankleHighWaves from "../../../assets/icons/ankle-high-waves.png";

const SurfHeightIcon = ({ surfHeight = 0 }) => {
  const ReportIcon = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: ${80 / 2}px;
    padding: 10px;
  `;

  let surfImage = "";

  if (surfHeight <= 2) {
    surfImage = shoulderHeadWaves;
  } else {
    surfImage = ankleHighWaves;
  }

  return <ReportIcon src={surfImage}></ReportIcon>;
};

export default SurfHeightIcon;
