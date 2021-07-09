import { create } from "apisauce";

const timeout = 10000; // 5 seconds

export const apiClient = create({
  baseURL: "http://192.168.42.12:9000/api",
  timeout: timeout,
});
