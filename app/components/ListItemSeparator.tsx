import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../config/colors";

interface Props {
  backgroundColor?: string;
}

export const ListItemSeparator = ({ backgroundColor }: Props) => (
  <View
    style={[
      styles.separator,
      { backgroundColor: backgroundColor ? backgroundColor : colors.black },
    ]}
  />
);

const styles = StyleSheet.create({
  separator: { width: "100%", height: 1, backgroundColor: colors.black },
});
