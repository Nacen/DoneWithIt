import React from "react";
import { Text, ViewStyle } from "react-native";
import { globalStyles } from "../config/styles";

interface Props {
  children: React.ReactNode;
  style?: ViewStyle;
}

export const AppText = ({ children, style }: Props) => {
  return <Text style={[globalStyles.text, style]}>{children}</Text>;
};
