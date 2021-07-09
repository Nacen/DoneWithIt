import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { Card } from "../components/Card";
import Screen from "../components/Screen";
import { colors } from "../config/colors";
import { AppText } from "../components/AppText";
import { AppButton } from "../components/AppButton";
import { Listing } from "../config/types";
import { FeedNavigatorParamList } from "../navigation/FeedNavigator";

import { getListings } from "../api/listings";
import { ActivityIndicator } from "../components/ActivityIndicator";
import { useApi } from "../hooks/useApi";

type ListingScreenNavigationProp = StackNavigationProp<
  FeedNavigatorParamList,
  "ListingDetails"
>;

interface Props {
  navigation: ListingScreenNavigationProp;
}

const ListingsScreen = ({ navigation }: Props) => {
  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApi(getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.container}>
      {error && (
        <View style={styles.errorContainer}>
          <AppText style={styles.errorMessage}>
            Couldn't retrieve the listings.
          </AppText>
          <AppButton
            label="Retry"
            onPress={loadListings}
            buttonStyle={styles.errorButton}
          />
        </View>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        renderItem={({ item }) => (
          <Card
            imageUrl={item.images[0].url}
            title={item.title}
            subTitle={item.price.toString()}
            key={item.id}
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
        keyExtractor={(item) => {
          return item.id.toString();
        }}
      />
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    padding: 10,
  },
  errorContainer: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  errorMessage: {
    marginBottom: 20,
  },
  errorButton: {
    width: 260,
  },
});
