import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

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
        style={styles.firstButton}
      ></TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log("Pressed")}
        style={styles.secondButton}
      ></TouchableOpacity>
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
  firstButton: {
    backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 30,
    width: 50,
    height: 50,
  },
  secondButton: {
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    right: 30,
    width: 50,
    height: 50,
  },
});
