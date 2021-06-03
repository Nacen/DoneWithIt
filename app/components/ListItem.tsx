import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
  ViewStyle,
  TouchableHighlight,
  ImageStyle,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import { colors } from "../config/colors";

interface Props {
  image?: ImageSourcePropType | string;
  title: string;
  subTitle?: string;
  listItemStyle?: ViewStyle;
  onPress?: () => void;
  renderLeftActions?: () => React.ReactNode;
  renderRightActions?: () => React.ReactNode;
  imageStyle?: ImageStyle;
  icon?: () => React.ReactNode;
}

export const ListItem = ({
  image,
  title,
  subTitle,
  listItemStyle,
  onPress,
  renderLeftActions,
  renderRightActions,
  imageStyle,
  icon,
}: Props) => {
  return (
    <Swipeable
      renderRightActions={renderRightActions}
      renderLeftActions={renderLeftActions}
    >
      <TouchableHighlight underlayColor={colors.gray} onPress={onPress}>
        <View style={[styles.container, listItemStyle]}>
          {image && (
            <Image
              source={typeof image === "string" ? { uri: image } : image}
              style={[styles.image, imageStyle]}
            />
          )}
          {icon && icon()}
          <View style={styles.itemDetails}>
            <Text style={styles.title}>{title}</Text>
            {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  itemDetails: {
    marginLeft: 10,
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "500",
  },
  subTitle: {
    color: colors.darkGray,
    fontSize: 18,
  },
});
