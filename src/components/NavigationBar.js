import React from "react";
import styled from "styled-components/native";
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

const NavigationBar = ({ navigation, rightNav = {}, leftNav = {} }, midNav = {}) => {

  const onSwipe = (direction) => {
    switch (direction) {
      case 'left':
        navigation.navigate('Preferences')
        break;
      case 'right':
        navigation.navigate('Sessions')
      default:
        break;
    }
  }

  return (
    <GestureRecognizer
      onSwipeLeft={() => onSwipe('left')}
      onSwipeRight={() => onSwipe('right')}
    >

    </GestureRecognizer>);
};

export default NavigationBar;