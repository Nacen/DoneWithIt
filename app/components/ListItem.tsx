import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import { colors } from "../config/colors";

interface Props {
  image: ImageSourcePropType | string;
  title: string;
  subTitle: string;
}

export const ListItem = ({ image, title, subTitle }: Props) => {
  return (
    <View style={styles.listerDetails}>
      <Image
        source={typeof image === "string" ? { uri: image } : image}
        style={styles.image}
      />
      <View style={styles.userDetails}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listerDetails: {
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginRight: 20,
  },
  userDetails: {
    paddingVertical: 2.5,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "500",
  },
  subTitle: {
    color: colors.gray,
    fontSize: 18,
  },
});
