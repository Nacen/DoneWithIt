import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageSourcePropType,
} from "react-native";
import { ListItem } from "../components/lists/ListItem";
import { ListItemDeleteAction } from "../components/lists/ListItemDeleteAction";
import { ListItemSeparator } from "../components/lists/ListItemSeparator";
import Screen from "../components/Screen";

const messagesData = [
  {
    id: 1,
    title: "M1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "Message 2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 4,
    title: "M3M3M3M3",
    description: "Description Three",
    image: require("../assets/mosh.jpg"),
  },
];

type messageType = {
  id: number;
  title: string;
  description: string;
  image: ImageSourcePropType;
};

interface Props {
  initialMessages?: messageType[];
}

export const MessagesScreen = ({ initialMessages = messagesData }: Props) => {
  const [refreshing, setRefreshing] = useState(false);
  const [messages, setMessages] = useState(messagesData);

  const handleDeleteMessage = (message: messageType) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            subTitle={item.description}
            key={item.id}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDeleteMessage(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 6,
              title: "M3M3M3M3",
              description: "Description Three",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});
