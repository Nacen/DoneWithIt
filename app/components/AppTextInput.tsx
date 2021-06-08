import React from "react";
import { StyleSheet, TextInput, TextStyle, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { materialType } from "../config/materialTypes";
import { globalStyles } from "../config/styles";

interface Props {
  icon?: materialType["name"];
  style?: TextStyle;
  [x: string]: any;
}

export const AppTextInput = ({ icon, style, ...otherProps }: Props) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          style={styles.icon}
          size={20}
          color={globalStyles.colors.darkGray}
        />
      )}
      <TextInput
        style={[globalStyles.text, styles.textInput, style]}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalStyles.colors.lightGray,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
  },
});
