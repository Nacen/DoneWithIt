import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AppText } from "./AppText";

export interface PickerItemProps {
  item: {
    label: string;
    [key: string]: any;
  };
  onPress: () => void;
}

const PickerItem = ({ item, onPress }: PickerItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

export default PickerItem;

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
