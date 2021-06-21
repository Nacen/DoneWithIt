import React, { useEffect, useState } from "react";
import { Image, ImageSourcePropType, StyleSheet } from "react-native";
import Screen from "./app/components/Screen";
import * as ImagePicker from "expo-image-picker";
import { ImageInput } from "./app/components/ImageInput";
import { ImageInputList } from "./app/components/ImageInputList";

export default function App() {
  return (
    <Screen style={styles.container}>
      <ImageInputList />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: 75,
    height: 75,
  },
});
