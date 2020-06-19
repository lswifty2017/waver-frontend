import React from "react";
import styled from "styled-components/native";
import Button from "../components/button/index";
import { colors } from "../modules/colors";
import ProfileAvatar from "../components/profile-avatar/index";
import maniImage from "../../assets/images/mani.jpeg";

const Container = styled.View`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  justify-content: flex-start;
`;

const ProfileContainer = styled.View`
  display: flex;
  flex-direction: column;
  padding: 30px 10px 60px;
  align-items: center;
`;

const ProfileName = styled.Text`
  font-weight: bold;
  font-size: 20px;
  padding-bottom: 5px;
  color: ${colors.fontColorPrimary};
`;

const ProfileLocation = styled.Text`
  font-size: 10px;
  color: ${colors.fontColorPrimary};
`;

const ButtonContainer = styled.View`
  padding-bottom: 160px;
`;

const HomeScreen = () => {
  return (
    <Container>
      <ProfileContainer>
        <ProfileAvatar image={maniImage} radius="80" />
        <ProfileName>Mani Balasubramaniam</ProfileName>
        <ProfileLocation>Melbourne, Australia</ProfileLocation>
      </ProfileContainer>
      <ButtonContainer>
        <Button
          text="Surf Report"
          bgColor={colors.componentBackground}
          textColor={colors.fontColorPrimary}
        />
        <Button
          text="My Sessions"
          bgColor={colors.componentBackground}
          textColor={colors.fontColorPrimary}
        />
        <Button
          text="Preferences"
          bgColor={colors.componentBackground}
          textColor={colors.fontColorPrimary}
        />
      </ButtonContainer>
      <Button
        text="Log Out"
        bgColor={colors.appBackground}
        textColor={colors.fontColorSecondary}
      />
    </Container>
  );
};

export default HomeScreen;
