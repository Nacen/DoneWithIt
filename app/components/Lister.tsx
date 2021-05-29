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
  profileImage: ImageSourcePropType | string;
  userName: string;
  listingCount: number;
}

export const Lister = ({ profileImage, userName, listingCount }: Props) => {
  return (
    <View style={styles.listerDetails}>
      <Image
        source={
          typeof profileImage === "string"
            ? { uri: profileImage }
            : profileImage
        }
        style={styles.profileImage}
      />
      <View style={styles.userDetails}>
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.listingCount}>{listingCount} Listings</Text>
      </View>
    </View>
  );
};

export default Lister;

const styles = StyleSheet.create({
  listerDetails: {
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  profileImage: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginRight: 20,
  },
  userDetails: {
    paddingVertical: 2.5,
  },
  userName: {
    fontSize: 18,
    marginBottom: 10,
  },
  listingCount: {
    color: colors.gray,
    fontSize: 18,
  },
});
