import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { colors } from "../config/colors";

interface Props {
  isRounded?: boolean;
  label: string;
  buttonStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

interface Styles {
  button: ViewStyle;
  label: TextStyle;
}

export const Button = ({
  isRounded = true,
  label,
  buttonStyle,
  labelStyle,
}: Props) => {
  return (
    <TouchableOpacity>
      <View
        style={[
          styles.button,
          isRounded ? borderStyle.radius : {},
          buttonStyle,
        ]}
      >
        <Text style={[styles.label, labelStyle]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create<Styles>({
  button: {
    backgroundColor: colors.primary,
  },
  label: {
    color: colors.white,
    fontWeight: "400",
    fontSize: 20,
  },
});

const borderStyle = StyleSheet.create({
  radius: {
    borderRadius: 10,
  },
});
