import React from "react";
import LottieView from "lottie-react-native";

interface Props {
  visible: boolean;
}

export const ActivityIndicator = ({ visible }: Props) => {
  if (!visible) return null;
  return (
    <LottieView
      autoPlay
      loop
      source={require("../assets/animations/loader.json")}
    />
  );
};
