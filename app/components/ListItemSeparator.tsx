import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../config/colors";

interface Props {
  backgroundColor: string;
}

export const Separator = ({ backgroundColor }: Props) => {
  return (
    <View style={[styles.separator, { backgroundColor: backgroundColor }]} />
  );
};

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.gray,
  },
});
