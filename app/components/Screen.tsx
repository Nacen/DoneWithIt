import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  ViewStyle,
} from "react-native";

interface Props {
  children?: React.ReactNode;
  style?: ViewStyle;
}

const Screen = ({ children, style }: Props) => {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});
