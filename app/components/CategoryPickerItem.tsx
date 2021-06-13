import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { materialType } from "../config/materialTypes";
import { AppText } from "./AppText";
import { Icon } from "./Icon";
import { PickerItemProps } from "./PickerItem";

interface Props extends PickerItemProps {
  item: {
    label: string;
    icon: materialType["name"];
    [key: string]: any;
  };
}

export const CategoryPickerItem = ({ item, onPress }: Props) => {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 10,
    textAlign: "center",
  },
});
