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
import { colors } from "../config/colors";

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
  width?: number | string | undefined;
}

export const AppPicker = ({
  icon,
  placeholder,
  items,
  selectedItem,
  onSelectItem,
  width = "100%",
}: AppPickerProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={openModal}>
        <View style={[styles.container, { width: width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              style={styles.icon}
              size={20}
              color={globalStyles.colors.darkGray}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

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
  placeholder: {
    flex: 1,
    color: colors.darkGray,
  },
});
