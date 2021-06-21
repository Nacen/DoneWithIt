import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";

import { ImageInput } from "./ImageInput";
import { isObjectEmpty } from "../config/utils";

interface Props {}

type ImageType = {
  uri: "string";
};

export const ImageInputList = ({}: Props) => {
  const [images, setImages] = useState<ImageType[]>([]);

  const setImageFromLibrary = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync();
      if (result.cancelled) return;
      console.log(result);
      setImages((images) => [...images, { uri: (result as ImageType)["uri"] }]);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {!isObjectEmpty(images) && (
        <FlatList
          data={images}
          renderItem={({ item }) => (
            <Image source={{ uri: item.uri }} style={styles.image} />
          )}
          keyExtractor={(item, index) => index.toString()}
          style={styles.imageList}
          numColumns={3}
        />
      )}
      <ImageInput
        onPress={setImageFromLibrary}
        size={75}
        style={styles.imageInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 10,
    marginBottom: 10,
  },
  imageInput: {
    marginHorizontal: 10,
  },
  imageList: {
    backgroundColor: "red",
    flexShrink: 1,
  },
});
