import { Formik } from "formik";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  initialValues: {
    [key: string]: any;
  };
  onSubmit: (args: any) => void;
  validationSchema: { [key: string]: any };
  children?: React.ReactNode;
}

export const AppForm = ({
  initialValues,
  onSubmit,
  children,
  validationSchema,
}: Props) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

const styles = StyleSheet.create({});
