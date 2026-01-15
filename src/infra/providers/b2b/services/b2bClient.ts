import axios from "axios";
import { getB2BToken, clearB2BToken } from "./b2bAuth";

export const b2bClient = axios.create({
  baseURL: process.env.B2B_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

b2bClient.interceptors.request.use(async (config) => {
  const token = await getB2BToken();
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

b2bClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      clearB2BToken();
      const newToken = await getB2BToken();

      originalRequest.headers.Authorization = `Bearer ${newToken}`;
      return b2bClient(originalRequest);
    }

    return Promise.reject(error);
  }
);
