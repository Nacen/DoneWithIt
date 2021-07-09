import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { RouteProp } from "@react-navigation/native";

import { Card } from "../components/Card";
import { ListItem } from "../components/lists/ListItem";
import { colors } from "../config/colors";
import { FeedNavigatorParamList } from "../navigation/FeedNavigator";

type ListingDetailsScreenRouteProp = RouteProp<
  FeedNavigatorParamList,
  "ListingDetailsScreen"
>;

interface Props {
  route: ListingDetailsScreenRouteProp;
}

export const ListingDetailsScreen = ({ route }: Props) => {
  const listings = route.params;
  return (
    <View style={styles.container}>
      <Card
        imageSource={listings.image}
        title={listings.title}
        subTitle={listings.price}
        subTitleStyle={styles.subTitle}
      />
      <ListItem
        subTitle="5 Listings"
        title="Mosh Hamedani"
        ImageComponent={
          <Image
            source={require("../assets/mosh.jpg")}
            style={styles.listerImage}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listerImage: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  subTitle: {
    color: colors.green,
  },
});
