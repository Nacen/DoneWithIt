import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import { materialType } from "../../config/materialTypes";
import { AppTextInput } from "../AppTextInput";
import { ErrorMessage } from "./ErrorMessage";
import { Errors, Touched } from "../../config/types";

interface Props {
  fieldName: string;
  icon?: materialType["name"];
  width?: number | string | undefined;
  [prop: string]: any;
}

export const AppFormField = ({
  fieldName,
  icon,
  width,
  ...otherProps
}: Props) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <AppTextInput
        icon={icon}
        onBlur={() => setFieldTouched(fieldName)}
        onChangeText={handleChange(fieldName)}
        {...otherProps}
        width={width}
      />
      <ErrorMessage
        error={(errors as Errors)[fieldName]}
        visible={(touched as Touched)[fieldName]}
      />
    </>
  );
};

const styles = StyleSheet.create({});
