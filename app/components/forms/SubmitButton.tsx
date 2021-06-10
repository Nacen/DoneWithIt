import { useFormikContext } from "formik";
import React from "react";
import { TextStyle, ViewStyle } from "react-native";

import { AppButton } from "../AppButton";

interface Props {
  label: string;
  labelStyle?: TextStyle;
  buttonStyle?: ViewStyle;
  [key: string]: any;
}

export const SubmitButton = ({
  label,
  labelStyle,
  buttonStyle,
  ...otherProps
}: Props) => {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      label={label}
      onPress={handleSubmit}
      buttonStyle={buttonStyle}
      labelStyle={labelStyle}
      {...otherProps}
    />
  );
};
