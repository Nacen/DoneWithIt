import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
  ViewStyle,
} from "react-native";

import { colors } from "../config/colors";

interface Props {
  image: ImageSourcePropType | string;
  title: string;
  subTitle: string;
  listItemStyle?: ViewStyle;
}

export const ListItem = ({ image, title, subTitle, listItemStyle }: Props) => {
  return (
    <View style={[styles.container, listItemStyle]}>
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
  container: {
    flexDirection: "row",
    padding: 15,
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
