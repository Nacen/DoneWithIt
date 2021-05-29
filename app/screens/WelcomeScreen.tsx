import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

import { colors } from "../config/colors";

const backgroundImage = require("../assets/background.jpg");
const logo = require("../assets/logo-red.png");

export const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.heading}>Sell What you don't need</Text>
        </View>
      </ImageBackground>
      <View style={styles.register} />
      <View style={styles.login} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 0.8,
    resizeMode: "cover",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    paddingTop: 50,
  },
  logo: {
    width: 75,
    height: 75,
    marginBottom: 20,
  },
  heading: { alignItems: "center", fontSize: 22 },

  register: {
    backgroundColor: colors.primary,
    flex: 0.1,
  },
  login: {
    backgroundColor: colors.secondary,
    flex: 0.1,
  },
});
