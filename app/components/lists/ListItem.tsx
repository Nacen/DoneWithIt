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
  ImageComponent,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import { colors } from "../../config/colors";

interface Props {
  title: string;
  subTitle?: string;
  listItemStyle?: ViewStyle;
  onPress?: () => void;
  renderLeftActions?: () => React.ReactNode;
  renderRightActions?: () => React.ReactNode;
  imageStyle?: ImageStyle;
  image?: ImageSourcePropType;
  ImageComponent?: React.ReactNode;
}

export const ListItem = ({
  title,
  subTitle,
  listItemStyle,
  onPress,
  renderLeftActions,
  renderRightActions,
  imageStyle,
  image,
  ImageComponent,
}: Props) => {
  return (
    <Swipeable
      renderRightActions={renderRightActions}
      renderLeftActions={renderLeftActions}
    >
      <TouchableHighlight underlayColor={colors.gray} onPress={onPress}>
        <View style={[styles.container, listItemStyle]}>
          {image ? <Image source={image} style={imageStyle} /> : null}
          {ImageComponent}
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
    marginLeft: 10,
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
