import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { materialType } from "../config/materialTypes";
import { colors } from "../config/colors";

interface Props extends materialType {
  size?: number;
  backgroundColor?: string;
  iconColor?: string;
  style?: ViewStyle;
}

export const Icon = ({
  name,
  size = 40,
  backgroundColor = colors.black,
  iconColor = colors.white,
  style,
}: Props) => {
  console.log(name, iconColor);
  return (
    <View
      style={{
        backgroundColor,
        width: size,
        height: size,
        borderRadius: size / 2,
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
    >
      <MaterialCommunityIcons
        size={size * 0.5}
        name={name}
        color={iconColor}
        style={[styles.icon, style]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: { alignSelf: "center", padding: 10 },
});
