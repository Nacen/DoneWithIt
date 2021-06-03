import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem } from "../components/ListItem";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import { colors } from "../config/colors";

interface Props {}

export const AccountScreen = (props: Props) => {
  return (
    <Screen style={styles.accountScreen}>
      <ListItem
        image={require("../assets/mosh.jpg")}
        title="Mosh Hamedani"
        subTitle="programmingwithmosh@gmail.com"
        listItemStyle={styles.user}
      />
      <ListItem
        icon={() => (
          <MaterialCommunityIcons
            size={30}
            name="format-list-bulleted"
            color={colors.white}
            style={[styles.listing, styles.iconStyle]}
          />
        )}
        title="My Listings"
        listItemStyle={styles.user}
      />
      <ListItem
        icon={() => (
          <MaterialCommunityIcons
            size={30}
            name="email"
            color={colors.white}
            style={[styles.messages, styles.iconStyle]}
          />
        )}
        title="My Messages"
        listItemStyle={styles.user}
      />
      <ListItem
        icon={() => (
          <MaterialCommunityIcons
            size={30}
            name="logout"
            color={colors.white}
            style={[styles.logout, styles.iconStyle]}
          />
        )}
        title="Log Out"
        listItemStyle={styles.user}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  accountScreen: {
    backgroundColor: colors.lightGray,
  },
  user: {
    marginBottom: 20,
  },
  listing: {
    backgroundColor: colors.primary,
  },
  messages: {
    backgroundColor: colors.secondary,
  },
  logout: {
    backgroundColor: colors.yellow,
  },
  iconStyle: {
    borderRadius: 50,
    alignSelf: "center",
    padding: 10,
  },
});
