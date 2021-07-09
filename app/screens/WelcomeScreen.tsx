import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { AppButton } from "../components/AppButton";
import { StackNavigationProp } from "@react-navigation/stack";

import { colors } from "../config/colors";
import { AuthStackParamList } from "../navigation/AuthNavigator";

const backgroundImage = require("../assets/background.jpg");
const logo = require("../assets/logo-red.png");

type WelcomeScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  "Welcome"
>;

type Props = {
  navigation: WelcomeScreenNavigationProp;
};

export const WelcomeScreen = ({ navigation }: Props) => {
  return (
    <ImageBackground
      source={backgroundImage}
      blurRadius={1}
      style={styles.backgroundImage}
    >
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.heading}>Sell What You Don't Need</Text>
      </View>
      <AppButton
        label="LOGIN"
        buttonStyle={styles.register}
        onPress={() => navigation.navigate("Login")}
      />
      <AppButton
        label="REGISTER"
        buttonStyle={styles.login}
        onPress={() => navigation.navigate("Register")}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },

  logoContainer: {
    position: "absolute",
    top: 50,
    alignSelf: "center",
    alignItems: "center",
  },

  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },

  heading: {
    fontSize: 22,
    fontWeight: "bold",
  },

  register: {
    backgroundColor: colors.primary,
    alignItems: "center",
    padding: 20,
    width: "90%",
    alignSelf: "center",
    marginBottom: 15,
    borderRadius: 50,
  },

  login: {
    backgroundColor: colors.secondary,
    alignItems: "center",
    padding: 20,
    width: "90%",
    alignSelf: "center",
    marginBottom: 15,
    borderRadius: 50,
  },
});
