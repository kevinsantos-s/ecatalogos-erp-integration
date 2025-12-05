// src/infra/providers/bling/blingClient.ts
import axios, { AxiosRequestConfig } from "axios";
import { getBlingToken } from "./authService";

const BLING_BASE = process.env.BLING_URL || "";

export async function blingGet<T = unknown>(endpoint: string, config?: AxiosRequestConfig) : Promise<T> {
  const token = await getBlingToken();
  const url = `${BLING_BASE}${endpoint}`;

  const response = await axios.get<T>(url, {
    headers: { Authorization: `Bearer ${token}` },
    timeout: 10_000,
    ...config
  });

  return response.data;
}

export async function blingPost<T = unknown, U = unknown>(
  endpoint: string,
  body: U,
  config?: AxiosRequestConfig
): Promise<T> {
  const token = await getBlingToken();
  const url = `${BLING_BASE}${endpoint}`;

  const response = await axios.post<T>(url, body, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    timeout: 10_000,
    ...config
  });

  return response.data;
}
