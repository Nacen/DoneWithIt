import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { WelcomeScreen } from "./app/screens/WelcomeScreen";
import { ViewImageScreen } from "./app/screens/ViewImageScreen";
import { ListingDetailsScreen } from "./app/screens/ListingDetailsScreen";
import { MessagesScreen } from "./app/screens/MessagesScreen";
import { AccountScreen } from "./app/screens/AccountScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <WelcomeScreen /> */}
      {/* <ListingDetailsScreen /> */}
      {/* <MessagesScreen /> */}
      <AccountScreen />
      {/* <ViewImageScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
