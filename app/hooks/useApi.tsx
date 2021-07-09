import { ApiResponse } from "apisauce";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

type API_FUNC = (...params: any[]) => any;

export const useApi = (apiFunc: API_FUNC) => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args: any[]) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    if (response.data) setData(response.data);
  };

  return {
    data,
    error,
    loading,
    request,
  };
};

const styles = StyleSheet.create({});
