import React from "react";
import styled from "styled-components/native";

const ButtonWrapper = styled.TouchableOpacity`
  background-color: ${({ color }) => color};
  width: 160px;
  height: 60px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 14px 20px;
  margin-bottom: 20px;
`;

const ButtonText = styled.Text`
  color: ${({ color }) => color};
  font-size: 16px;
  font-weight: bold;
`;

const ButtonImage = styled.Image`
  width: 20px;
  height: 20px;
`;

const Button = ({
  bgColor = "white",
  text,
  textColor = "black",
  image,
  svg,
  onPress
}) => {
  return (
    <ButtonWrapper color={bgColor} onPress={onPress}>
      {text && <ButtonText color={textColor}>{text}</ButtonText>}
      {image && <ButtonImage source={image} />}
      {svg && svg}
    </ButtonWrapper>
  );
};

export default Button;
