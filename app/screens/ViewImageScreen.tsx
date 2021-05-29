import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../config/colors";

const backgroundImage = require("../assets/chair.jpg");

export const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={backgroundImage}
        style={styles.backgroundImage}
      />
      <TouchableOpacity
        onPress={() => console.log("Pressed")}
        style={styles.closeIcon}
      >
        <MaterialCommunityIcons name="close" size={35} color={colors.white} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log("Pressed")}
        style={styles.deleteIcon}
      >
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={35}
          color={colors.white}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.black,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 25,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 25,
  },
});
