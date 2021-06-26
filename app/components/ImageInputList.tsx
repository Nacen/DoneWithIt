import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import { ImageInput } from "./ImageInput";
import { ImageType } from "../config/types";
import { useRef } from "react";

interface Props {
  images?: ImageType[];
  onAddImage: (image: ImageType) => void;
  onRemoveImage: (image: ImageType) => void;
}

export const ImageInputList = ({
  images = [],
  onAddImage,
  onRemoveImage,
}: Props) => {
  const scrollView = useRef<ScrollView>(null);

  return (
    <View>
      <ScrollView
        horizontal
        ref={scrollView}
        onContentSizeChange={() => scrollView.current?.scrollToEnd()}
      >
        <View style={styles.container}>
          {images.map((image, index) => (
            <View key={`${image}${index}`} style={styles.image}>
              <ImageInput
                imageUri={image}
                onChangeImage={() => onRemoveImage(image)}
              />
            </View>
          ))}
          <ImageInput onChangeImage={(image) => onAddImage(image)} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});
