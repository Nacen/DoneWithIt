import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AccountScreen } from "../screens/AccountScreen";
import { MessagesScreen } from "../screens/MessagesScreen";
import ListingsScreen from "../screens/ListingsScreen";

export type AccountNavigatorParamList = {
  Account: undefined;
  Messages: undefined;
  Listings: undefined;
};

const Stack = createStackNavigator<AccountNavigatorParamList>();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{ headerTitleAlign: "center" }}
      />
      <Stack.Screen name="Messages" component={MessagesScreen} />
      <Stack.Screen name="Listings" component={ListingsScreen} />
    </Stack.Navigator>
  );
};
