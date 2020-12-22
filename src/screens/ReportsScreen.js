import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import ReportCard from "../components/ReportCard";
import data from "../data/data";
import { colors } from "../modules/colors";
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ReportsContainer = styled.View`
  padding: ${width / 20}px;
`;

const Reports = styled.FlatList`
  background-color: ${colors.appBackground};
`;

const Heading = styled.Text`
  font-size: 16px;
  padding-bottom: 4px;
  color: ${colors.fontColorPrimary};
`;

const ReportsScreen = ({ navigation, reportData }) => {

  const onSwipe = (direction) => {
    switch (direction) {
      case 'left':
        navigation.navigate('Sessions', { transition: 'vertical' })
        console.log('swipe left')
        break;
      case 'right':
        navigation.navigate('Preferences')
        console.log('swipe right')
      default:
        break;
    }
  }

  return (
    <GestureRecognizer
      onSwipeLeft={() => onSwipe('left')}
      onSwipeRight={() => onSwipe('right')}>
      <ReportsContainer>
        <Reports
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index, separators }) => <ReportCard {...item} />}
        />
      </ReportsContainer>
    </GestureRecognizer>
  );
};

export default ReportsScreen;
