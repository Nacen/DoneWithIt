import React from "react";
import { Text, TextStyle } from "react-native";
import { globalStyles } from "../config/styles";

interface Props {
  children: React.ReactNode;
  style?: TextStyle;
  [key: string]: any;
}

export const AppText = ({ children, style, ...otherProps }: Props) => {
  return (
    <Text style={[globalStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};
