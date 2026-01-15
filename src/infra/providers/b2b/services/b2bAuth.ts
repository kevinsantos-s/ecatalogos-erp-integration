import axios from "axios";

let cachedToken: string | null = null;

function validateEnv() {
  const required = [
    "B2B_API_URL",
    "B2B_EMAIL",
    "B2B_PASSWORD",
    "B2B_KEY",
  ];

  for (const key of required) {
    if (!process.env[key]) {
      throw new Error(`Variável de ambiente ${key} não definida`);
    }
  }
}

export async function getB2BToken() {
  validateEnv();
  
  if (cachedToken) return cachedToken;

  const response = await axios.post(
    `${process.env.B2B_API_URL}/auth`,
    {
      email: process.env.B2B_EMAIL,
      password: process.env.B2B_PASSWORD,
      key: Number(process.env.B2B_KEY),
    }
  );

  cachedToken = response.data.resource.token;
  return cachedToken;
}

export function clearB2BToken() {
  cachedToken = null;
}
