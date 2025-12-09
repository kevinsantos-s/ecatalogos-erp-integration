import axios from "axios";

export const b2bClient = axios.create({
  baseURL: process.env.B2B_API_URL,
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${process.env.B2B_API_TOKEN}`,
  },
});
