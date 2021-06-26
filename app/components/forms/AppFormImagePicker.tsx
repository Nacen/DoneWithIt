import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ImageType, Errors } from "../../config/types";

import { ImageInputList } from "../ImageInputList";
import { ErrorMessage } from "./ErrorMessage";

interface Props {
  fieldName: string;
}

export const AppFormImagePicker = ({ fieldName }: Props) => {
  const { setFieldValue, errors, values } = useFormikContext();
  const imageURIs = (values as { [fieldName: string]: ImageType[] })[fieldName];

  const handleAddURI = (uri: ImageType) => {
    setFieldValue(fieldName, [...imageURIs, uri]);
  };

  const handleRemoveURI = (uri: ImageType) => {
    setFieldValue(
      fieldName,
      imageURIs.filter((imageURI: ImageType) => imageURI !== uri)
    );
  };
  return (
    <>
      <ImageInputList
        images={imageURIs}
        onAddImage={handleAddURI}
        onRemoveImage={handleRemoveURI}
      />
      <ErrorMessage error={(errors as Errors)[fieldName]} />
    </>
  );
};

const styles = StyleSheet.create({});
