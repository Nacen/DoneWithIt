import React, { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { globalStyles } from "../config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { materialType } from "../config/materialTypes";
import { AppText } from "./AppText";
import PickerItem from "./PickerItem";

export type Category = {
  label: string;
  value: number;
};

export interface AppPickerProps {
  icon?: materialType["name"];
  placeholder: string;
  items: Category[];
  onSelectItem: (item: Category) => void;
  selectedItem?: Category;
}

export const AppPicker = ({
  icon,
  placeholder,
  items,
  selectedItem,
  onSelectItem,
}: AppPickerProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={openModal}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              style={styles.icon}
              size={20}
              color={globalStyles.colors.darkGray}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={globalStyles.colors.darkGray}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={isModalVisible} animationType="slide">
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <PickerItem
              label={item.label}
              onPress={() => {
                closeModal();
                onSelectItem(item);
              }}
            />
          )}
        />
        <Button onPress={closeModal} title="Close" />
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalStyles.colors.lightGray,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});
