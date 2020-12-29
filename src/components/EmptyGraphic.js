import React, { useState } from "react";
import styled from "styled-components/native";
import { colors } from "../modules/colors";
import { WaverLogo, WaverLogoLight } from "../../assets/react-svgs/index";
import useInterval from "../hooks/useInterval";

const EmptyGraphicWrapper = styled.View`
  position: absolute;
  top: ${({ yPosition }) => yPosition}px;
  background-color: ${colors.lightBlue};
  width: 280px;
  height: 280px;
  border-radius: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 6px 6px 2px #b8a1a129;
`;

const InnerCircle = styled.View`
  background-color: ${colors.white};
  width: 200px;
  height: 200px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 6px 6px 2px #b8a1a129;
`;

const WaverLogoWrapper = styled.View`
  position: relative;
  margin-bottom: 38px;
`;

const WaverLogoPrimaryWrapper = styled.View`
  position: absolute;
  bottom: -28px;
  right: -76px;
`;

const WaverLogoSecondaryWrapper = styled.View`
  position: absolute;
  bottom: -32px;
  right: -82px;
`;

const Text = styled.Text`
  color: ${colors.fontColorPrimary};
  font-weight: 600;
  font-size: 16px;
`;

const EmptyGraphic = () => {
  const [graphicPosition, setGraphicPosition] = useState(120);
  const [intervalDelay, setIntervalDelay] = useState(90);
  const [animationDirection, setAnimationDirection] = useState("UP");

  useInterval(() => {
    checkPosition();
    if (animationDirection === "UP") {
      setGraphicPosition(graphicPosition + 1);
    }

    if (animationDirection === "DOWN") {
      setGraphicPosition(graphicPosition - 1);
    }
  }, intervalDelay);

  const checkPosition = () => {
    if (graphicPosition > 130) {
      setAnimationDirection("DOWN");
    }

    if (graphicPosition < 120) {
      setAnimationDirection("UP");
    }
  };

  return (
    <EmptyGraphicWrapper yPosition={graphicPosition}>
      <InnerCircle>
        <WaverLogoWrapper>
          <WaverLogoPrimaryWrapper>
            <WaverLogo />
          </WaverLogoPrimaryWrapper>
          <WaverLogoSecondaryWrapper>
            <WaverLogoLight />
          </WaverLogoSecondaryWrapper>
        </WaverLogoWrapper>
        <Text>You're up to date!</Text>
      </InnerCircle>
    </EmptyGraphicWrapper>
  );
};

export default EmptyGraphic;
