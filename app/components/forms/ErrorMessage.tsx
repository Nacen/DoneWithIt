import React from "react";
import { StyleSheet, TextStyle } from "react-native";
import { AppText } from "../AppText";

interface Props {
  error: string | undefined;
  visible?: boolean | undefined;
  style?: TextStyle;
}

export const ErrorMessage = ({ error, visible, style }: Props) => {
  if (!visible || !error) return null;
  return (
    <AppText style={StyleSheet.flatten([styles.error, style])}>{error}</AppText>
  );
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    padding: 10,
  },
});
