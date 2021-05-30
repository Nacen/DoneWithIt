import React from "react";
import { StyleSheet, SafeAreaView, StatusBar, Platform } from "react-native";

interface Props {
  children: React.ReactNode;
}

const Screen = ({ children }: Props) => {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
