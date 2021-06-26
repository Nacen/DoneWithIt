import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import { Category } from "../components/AppPicker";
import { CategoryPickerItem } from "../components/CategoryPickerItem";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import { AppFormImagePicker } from "../components/forms/AppFormImagePicker";
import { AppFormPicker } from "../components/forms/AppFormPicker";
import Screen from "../components/Screen";
import { categories } from "../config/tempData";
import { useLocation } from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().optional().min(1).max(255).label("Description"),
  images: Yup.array().min(1, "Please select atleast one image"),
});

const initialValues = {
  title: "",
  price: "",
  category: categories,
  description: "",
  images: [],
};

export const ListingEditScreen = () => {
  const location = useLocation();

  const [category, setCategory] = useState(categories[0]);

  const setItemCategory = (category: Category) => {
    setCategory(category);
  };

  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <AppForm
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values) => console.log(location)}
      >
        <AppFormImagePicker fieldName="images" />
        <AppFormField fieldName="title" placeholder="Title" width={120} />
        <AppFormField fieldName="price" placeholder="Price" width={120} />
        <AppFormPicker
          placeholder="Category"
          items={categories}
          name="Category"
          width="50%"
          numOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
        />
        <AppFormField
          fieldName="description"
          placeholder="Description"
          autoCorrect={false}
          autoCapitalize="none"
        />
        <SubmitButton label="POST" buttonStyle={styles.submitButton} />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  submitButton: {
    marginTop: 20,
  },
});
