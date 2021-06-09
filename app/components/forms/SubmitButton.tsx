import { useFormikContext } from "formik";
import React from "react";

import { AppButton } from "../AppButton";

interface Props {
  label: string;
  [key: string]: any;
}

export const SubmitButton = ({ label, ...otherProps }: Props) => {
  const { handleSubmit } = useFormikContext();
  return <AppButton label={label} onPress={handleSubmit} {...otherProps} />;
};
