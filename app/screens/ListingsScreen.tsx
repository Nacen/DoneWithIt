import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageSourcePropType,
} from "react-native";
import { Card } from "../components/Card";
import Screen from "../components/Screen";
import { colors } from "../config/colors";

type Listing = {
  id: string;
  image: ImageSourcePropType;
  title: string;
  price: string;
};

interface Props {
  listings: Listing[];
}

const ListingsScreen = ({ listings }: Props) => {
  return (
    <Screen style={styles.container}>
      <FlatList
        data={listings}
        renderItem={({ item }) => (
          <Card
            imageSource={item.image}
            title={item.title}
            subTitle={item.price}
            key={item.id}
          />
        )}
      />
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray,
    padding: 20,
  },
});
