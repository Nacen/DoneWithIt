import React from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
  ViewStyle,
  TouchableHighlight,
  ImageStyle,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../../config/colors";
import { AppText } from "../AppText";

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
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={25}
            color={colors.darkGray}
          />
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
    alignItems: "center",
  },
  itemDetails: {
    marginLeft: 10,
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
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
