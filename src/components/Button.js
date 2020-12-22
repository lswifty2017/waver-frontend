import React from "react";
import styled from "styled-components/native";

const Button = ({
  bgColor = "white",
  text = "",
  textColor = "black",
  onPress
}) => {
  const Button = styled.TouchableOpacity`
    background-color: ${bgColor};
    width: 265px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 14px 20px;
    margin-bottom: 20px;
    box-shadow: 6px 6px 2px #b8a1a129;
  `;

  const ButtonText = styled.Text`
    color: ${textColor};
    font-size: 16px;
    font-weight: bold;
  `;

  return (
    <Button onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
};

export default Button;
