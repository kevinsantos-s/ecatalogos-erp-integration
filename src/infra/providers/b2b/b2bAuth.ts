import axios from "axios";

let cachedToken: string | null = null;

export async function getB2BToken() {
  if (cachedToken) return cachedToken;

  const response = await axios.post(
    `${process.env.B2B_API_URL}/auth`,
    {
      email: process.env.B2B_EMAIL,
      password: process.env.B2B_PASSWORD,
      key: process.env.B2B_KEY,
    }
  );

  cachedToken = response.data.resource.token;
  return cachedToken;
}

export function clearB2BToken() {
  cachedToken = null;
}
