import axios, { AxiosError } from "axios";

export const api = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    if (!error.response) {
      return Promise.reject(
        new Error("Network error. Please try again.")
      );
    }

    const message =
      (error.response.data as any)?.message ||
      `Request failed with status ${error.response.status}`;

    return Promise.reject(
      new Error(message)
    );
  }
);