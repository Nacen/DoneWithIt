import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem } from "../components/ListItem";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import { colors } from "../config/colors";
import { Icon } from "../components/Icon";

interface Props {}

export const AccountScreen = (props: Props) => {
  return (
    <Screen style={styles.accountScreen}>
      <ListItem
        image={require("../assets/mosh.jpg")}
        title="Mosh Hamedani"
        subTitle="programmingwithmosh@gmail.com"
        listItemStyle={styles.listingMargin}
      />
      <ListItem
        icon={() => (
          <Icon
            name="format-list-bulleted"
            size={50}
            backgroundColor={colors.danger}
          />
        )}
        title="My Listings"
        listItemStyle={styles.listingMargin}
      />
      <ListItem
        icon={() => (
          <Icon name="email" size={50} backgroundColor={colors.secondary} />
        )}
        title="My Messages"
        listItemStyle={styles.listingMargin}
      />
      <ListItem
        icon={() => (
          <Icon name="logout" size={50} backgroundColor={colors.yellow} />
        )}
        title="Log Out"
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  accountScreen: {
    backgroundColor: colors.lightGray,
  },
  listingMargin: {
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
