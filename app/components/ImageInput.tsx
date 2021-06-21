import React, { useEffect } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../config/colors";

interface Props {
  size?: number;
  onPress: (...args: any) => any;
  style?: ViewStyle;
}

export const ImageInput = ({ style, size = 100, onPress }: Props) => {
  useEffect(() => {
    const requestPermission = async () => {
      try {
        const { granted } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!granted) {
          alert("Permission to access camera is required!");
          return;
        }
      } catch (error) {
        console.log(error);
      }
    };
    requestPermission();
  }, []);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style, { width: size, height: size }]}>
        <MaterialCommunityIcons name="camera" size={size / 2} color="#3c3c3c" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    height: 100,
    width: 100,
    backgroundColor: colors.lightGray,
    alignItems: "center",
    justifyContent: "center",
  },
});
