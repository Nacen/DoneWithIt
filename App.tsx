import React, { useEffect, useState } from "react";
import { Image, ImageSourcePropType, StyleSheet, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Screen from "./app/components/Screen";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Button } from "react-native";
import { AuthNavigator } from "./app/navigation/AuthNavigator";
import { navigationTheme } from "./app/navigation/navigationTheme";
import { AppNavigator } from "./app/navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
    // <ListingDetailsScreen />
  );
}

const styles = StyleSheet.create({});
