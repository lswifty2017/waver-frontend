import React from "react";
import styled from "styled-components/native";
import { Beach } from "../../assets/icons/index";

const BeachInfographic = ({
  windSpeed,
  windDirection,
  swellHeight,
  swellDirection,
  beachImage
}) => {
  const Wrapper = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const ImageWrapper = styled.Image`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    resize-mode: contain;
    overflow: hidden;
    width: 100%;
    height: auto;
    aspect-ratio: 1;
    border-radius: 10px;
  `;

  return (
    <Wrapper>
      <ImageWrapper source={Beach} />
    </Wrapper>
  );
};

export default BeachInfographic;
