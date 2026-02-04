import axios, { AxiosRequestConfig } from "axios";
import { getBlingToken } from "./authService";

const BLING_BASE = process.env.BLING_URL!;

export async function blingGet<T = unknown>(endpoint: string, blingCompanyId: string, config?: AxiosRequestConfig): Promise<T> {
  const token = await getBlingToken(blingCompanyId); 
  const url = `${BLING_BASE}${endpoint}`;

  const response = await axios.get<T>(url, {
    headers: { Authorization: `Bearer ${token}`, "enable-jwt": "1", ...(config?.headers ?? {})},
    timeout: 10_000,
    ...config,
  });

  return response.data;
}

export async function blingPost<T = unknown, U = unknown>(endpoint: string, blingCompanyId: string, body: U, config?: AxiosRequestConfig): Promise<T> {
  const token = await getBlingToken(blingCompanyId);
  const url = `${BLING_BASE}${endpoint}`;

  const response = await axios.post<T>(url, body, {
    headers: {
      Authorization: `Bearer ${token}`, "enable-jwt": "1",
      "Content-Type": "application/json",
      ...(config?.headers ?? {}),
    },
    timeout: 10_000,
    ...config,
  });

  return response.data;
}
