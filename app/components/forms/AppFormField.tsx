import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import { materialType } from "../../config/materialTypes";
import { AppTextInput } from "../AppTextInput";
import { ErrorMessage } from "./ErrorMessage";

interface Props {
  fieldName: string;
  icon?: materialType["name"];
  [prop: string]: any;
}

type Errors = {
  [fieldName: string]: string;
};

type Touched = {
  [fieldName: string]: boolean;
};

export const AppFormField = ({ fieldName, icon, ...otherProps }: Props) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <AppTextInput
        icon={icon}
        onBlur={() => setFieldTouched(fieldName)}
        onChangeText={handleChange(fieldName)}
        {...otherProps}
      />
      <ErrorMessage
        error={(errors as Errors)[fieldName]}
        visible={(touched as Touched)[fieldName]}
      />
    </>
  );
};

const styles = StyleSheet.create({});
