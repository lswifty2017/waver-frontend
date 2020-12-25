import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import styled from "styled-components/native";
import { colors } from "./src/modules/colors";
import { fonts } from "./src/modules/fonts";
import HomeScreen from "./src/screens/HomeScreen";
import ReportsScreen from "./src/screens/ReportsScreen";
import PreferencesScreen from "./src/screens/PreferencesScreen";
import SessionsScreen from "./src/screens/SessionsScreen";

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
    <NavigationContainer theme={appTheme}>
      <Stack.Navigator
        initialRouteName="Reports"
        screenOptions={{
          headerShown: false
        }}
        mode="card"
      >
        <Stack.Screen
          name="Preferences"
          component={PreferencesScreen}
          options={{ gestureDirection: "horizontal-inverted" }}
        />
        <Stack.Screen name="Reports" component={ReportsScreen} />
        <Stack.Screen name="Sessions" component={SessionsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
