import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import styled from "styled-components/native";
import { colors } from "./src/modules/colors";
import { fonts } from "./src/modules/fonts";
import HomeScreen from "./src/views/home-screen";
import ReportsScreen from "./src/views/reports-screen";

const appStyles = {
  flex: 1,
  backgroundColor: colors.appBackground,
  alignItems: "center",
  fontFamily: fonts.primaryFontFamily,
  color: colors.fontColorPrimary
};

const appTheme = {
  dark: false,
  colors: {
    primary: colors.fontColorPrimary,
    background: colors.appBackground,
    card: colors.componentBackground,
    text: colors.fontColorPrimary,
    border: colors.appBackground
  }
};

const Stack = createStackNavigator();

export default function App() {
  return (
    // <AppContainer>
    //   <ReportScreen />
    //   {/* <HomeScreen /> */}
    //   <StatusBar hidden={true} />
    // </AppContainer>

    <NavigationContainer theme={appTheme}>
      <Stack.Navigator
        initialRouteName="Home"
        // screenOptions={{
        //   headerShown: false
        // }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Reports" component={ReportsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
