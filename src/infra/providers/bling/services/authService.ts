import axios from "axios";
import fs from "fs";
import path from "path";
import "dotenv/config";

let currentAccessToken: string | null = process.env.BLING_ACCESS_TOKEN || null;
let currentRefreshToken: string | null = process.env.BLING_REFRESH_TOKEN || null;
let tokenExpiresAt: number | null = null;

const EXPIRATION_OFFSET = 5000; 

// caminho do .env
const envPath = path.resolve(".env");

// função para salvar variável no .env
function saveEnv(key: string, value: string) {
  let env = fs.readFileSync(envPath, "utf-8");
  const regex = new RegExp(`^${key}=.*$`, "m");
  if (regex.test(env)) {
    env = env.replace(regex, `${key}=${value}`);
  } else {
    env += `\n${key}=${value}`;
  }
  fs.writeFileSync(envPath, env);
}

export async function refreshBlingToken(): Promise<string> {
  if (!currentRefreshToken) {
    throw new Error("Nenhum refresh token disponível.");
  }

  console.log("Renovando token do Bling...");

  const credentials = Buffer.from(
    `${process.env.BLING_CLIENT_ID}:${process.env.BLING_CLIENT_SECRET}`
  ).toString("base64");

  const body = new URLSearchParams();
  body.append("grant_type", "refresh_token");
  body.append("refresh_token", currentRefreshToken);

  const response = await axios.post(
    process.env.BLING_ACCESS_TOKEN_URL!,
    body.toString(),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${credentials}`,
      },
    }
  );

  currentAccessToken = response.data.access_token;
  currentRefreshToken = response.data.refresh_token;
  tokenExpiresAt = Date.now() + response.data.expires_in * 1000;

  saveEnv("BLING_ACCESS_TOKEN", currentAccessToken);
  saveEnv("BLING_REFRESH_TOKEN", currentRefreshToken);

  console.log("Token atualizado com sucesso!");
  return currentAccessToken;
}

export async function getBlingToken(): Promise<string> {
  if (!currentAccessToken || !tokenExpiresAt) {
    return refreshBlingToken();
  }

  const needsRefresh = Date.now() > tokenExpiresAt - EXPIRATION_OFFSET;

  if (needsRefresh) {
    return refreshBlingToken();
  }

  return currentAccessToken;
}
