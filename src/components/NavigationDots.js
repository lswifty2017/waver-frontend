import React from "react";
import styled from "styled-components/native";
import { colors } from "../modules/colors";

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
`;

const NavgationDotsContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const Dot = styled.View`
  background-color: ${({ active, color }) => (active ? `transparent` : color)};
  border-radius: ${({ size }) => size / 2}px;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  margin: 0 5px;
  border: ${({ active, color }) =>
    active && color ? `1px solid ${color}` : "none"};
`;

const Title = styled.Text`
  color: ${({ color }) => (color ? color : colors.white)};
  padding-bottom: 12px;
  font-size: 16px;
  font-weight: 600;
`;

const NavigationDots = ({
  total = 3,
  activeDot = 2,
  size = 10,
  title,
  color
}) => {
  const renderDots = (total, activeDot, size, color) => {
    const dotsJSX = [];
    const activeIndex = activeDot - 1;
    let currentIndex = 0;

    for (currentIndex; currentIndex < total; currentIndex++) {
      currentIndex === activeIndex
        ? dotsJSX.push(
            <Dot
              key={currentIndex}
              active={true}
              size={size}
              color={color || "white"}
            />
          )
        : dotsJSX.push(
            <Dot key={currentIndex} size={size} color={color || "white"} />
          );
    }

    return dotsJSX;
  };

  return (
    <Wrapper>
      <Title color={color}>{title}</Title>
      <NavgationDotsContainer>
        {renderDots(total, activeDot, size, color)}
      </NavgationDotsContainer>
    </Wrapper>
  );
};

export default NavigationDots;
