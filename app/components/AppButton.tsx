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
  onPress: () => void;
}

interface Styles {
  button: ViewStyle;
  label: TextStyle;
}

export const AppButton = ({
  isRounded = true,
  label,
  buttonStyle,
  labelStyle,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
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
    padding: 15,
  },
  label: {
    color: colors.white,
    fontWeight: "400",
    fontSize: 20,
    alignSelf: "center",
  },
});

const borderStyle = StyleSheet.create({
  radius: {
    borderRadius: 50,
  },
});
