import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { ListItem } from "../components/ListItem";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import { colors } from "../config/colors";
import { Icon } from "../components/Icon";
import { materialType } from "../config/materialTypes";

interface Props {}

type MenuItem = {
  id: string;
  title: string;
  icon: {
    name: materialType["name"];
    backgroundColor: string;
  };
};

const MenuItems: MenuItem[] = [
  {
    id: "1",
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.danger,
    },
  },
  {
    id: "2",
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

export const AccountScreen = (props: Props) => {
  return (
    <Screen style={styles.accountScreen}>
      <ListItem
        ImageComponent={
          <Image
            source={require("../assets/mosh.jpg")}
            style={styles.accountImage}
          />
        }
        title="Mosh Hamedani"
        subTitle="programmingwithmosh@gmail.com"
        listItemStyle={styles.listingMargin}
      />
      <View style={styles.listingMargin}>
        <FlatList
          data={MenuItems}
          renderItem={({ item }) => (
            <ListItem
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  size={50}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              title={item.title}
            />
          )}
          keyExtractor={(menuItem) => menuItem.title}
        />
      </View>
      <ListItem
        ImageComponent={
          <Icon name="logout" size={50} backgroundColor={colors.yellow} />
        }
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
  accountImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
});
