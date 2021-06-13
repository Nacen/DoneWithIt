import React from "react";
import { useFormikContext } from "formik";
import { StyleSheet, Text, View } from "react-native";
import { AppPicker, AppPickerProps, Category } from "../AppPicker";
import { ErrorMessage } from "./ErrorMessage";
import { Errors, Touched } from "../../config/types";

interface Props {
  items: Category[];
  width?: number | string | undefined;
  name: string;
  placeholder: string;
  PickerItemComponent?: React.VFC<any>;
  numOfColumns?: number;
}

export const AppFormPicker = ({
  items,
  name,
  placeholder,
  width,
  PickerItemComponent,
  numOfColumns,
}: Props) => {
  const { errors, touched, values, setFieldValue } = useFormikContext();
  return (
    <>
      <AppPicker
        numOfColumns={numOfColumns}
        width={width}
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={(values as { [key: string]: any })[name]}
        PickerItemComponent={PickerItemComponent}
      />
      <ErrorMessage
        error={(errors as Errors)[name]}
        visible={(touched as Touched)[name]}
      />
    </>
  );
};

const styles = StyleSheet.create({});
