import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import { Category } from "../components/AppPicker";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import { AppFormPicker } from "../components/forms/AppFormPicker";
import Screen from "../components/Screen";
import { categories } from "../config/tempData";

interface Props {}

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().optional().min(1).max(255).label("Description"),
});

const initialValues = {
  title: "",
  price: "",
  category: categories,
  description: "",
};

export const ListingEditScreen = (props: Props) => {
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
        onSubmit={(values) => console.log(values)}
      >
        <AppFormField fieldName="title" placeholder="Title" />
        <AppFormField fieldName="price" placeholder="Price" />
        <AppFormPicker
          placeholder="Category"
          items={categories}
          onSelectItem={setItemCategory}
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
