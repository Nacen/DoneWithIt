import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import { ListingDetailsScreen } from "../screens/ListingDetailsScreen";
import { Listing } from "../config/types";

export type FeedNavigatorParamList = {
  Listings: undefined;
  ListingDetails: Listing;
};

const Stack = createStackNavigator<FeedNavigatorParamList>();

export const FeedNavigator = () => {
  return (
    <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Listings" component={ListingsScreen} />
      <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
    </Stack.Navigator>
  );
};
