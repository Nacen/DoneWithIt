import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Card } from "../components/Card";
import { ListItem } from "../components/lists/ListItem";
import { colors } from "../config/colors";

export const ListingDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Card
        imageSource={require("../assets/jacket.jpg")}
        title="Red jacket for sale!"
        subTitle="$100"
        subTitleStyle={styles.subTitle}
        cardStyle={styles.card}
      />
      <ListItem
        subTitle="5 Listings"
        title="Mosh Hamedani"
        ImageComponent={<Image source={require("../assets/mosh.jpg")} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {},
  subTitle: {
    color: colors.green,
  },
});
