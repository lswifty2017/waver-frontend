import React from "react";
import styled from "styled-components/native";

const ProfileAvatar = ({ image, radius }) => {
  const Avatar = styled.Image`
    width: ${radius}px;
    height: ${radius}px;
    border-radius: ${radius / 2}px;
    margin-bottom: 10px;
  `;

  return <Avatar source={image} />;
};

export default ProfileAvatar;
