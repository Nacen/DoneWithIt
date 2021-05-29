import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  Image,
  ViewStyle,
  TextStyle,
  ImageStyle,
  ImageSourcePropType,
} from "react-native";

import { colors } from "../config/colors";

interface Props {
  cardStyle?: StyleProp<ViewStyle>;
  detailsContainerStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  titleStyle?: StyleProp<TextStyle>;
  subTitleStyle?: StyleProp<TextStyle>;
  descriptionStyle?: StyleProp<TextStyle>;
  imageSource: ImageSourcePropType;
  description?: string;
  title: string;
  subTitle: string;
}

interface Styles {
  card: ViewStyle;
  image: ImageStyle;
  title: TextStyle;
  subTitle: TextStyle;
  description: TextStyle;
  detailsContainer: ViewStyle;
}

export const Card = ({
  cardStyle,
  titleStyle,
  imageStyle,
  subTitleStyle,
  descriptionStyle,
  imageSource,
  title,
  subTitle,
  description,
  detailsContainerStyle,
}: Props) => {
  return (
    <View style={[styles.card, cardStyle]}>
      <Image source={imageSource} style={[styles.image, imageStyle]} />
      <View style={[styles.detailsContainer, detailsContainerStyle]}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
        <Text style={[styles.subTitle, subTitleStyle]}>{subTitle}</Text>
        <Text style={[styles.description, descriptionStyle]}>
          {description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create<Styles>({
  card: {
    borderRadius: 20,
    backgroundColor: colors.white,
    overflow: "hidden",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: colors.black,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
    color: colors.black,
  },
  description: {
    fontSize: 18,
    color: colors.black,
  },
});