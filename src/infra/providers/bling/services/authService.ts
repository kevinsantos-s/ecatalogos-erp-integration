import { prisma } from "../../../../prisma";
import axios from "axios";

const BLING_ACCESS_TOKEN_URL = process.env.BLING_ACCESS_TOKEN_URL!;
const BLING_CLIENT_ID = process.env.BLING_CLIENT_ID!;
const BLING_CLIENT_SECRET = process.env.BLING_CLIENT_SECRET!;
const EXPIRATION_OFFSET = 5_000; 

function encodeCredentials() {
  return Buffer.from(`${BLING_CLIENT_ID}:${BLING_CLIENT_SECRET}`).toString("base64");
}

export async function exchangeCodeForToken(userId: string, code: string, redirectUri: string) {
  const body = new URLSearchParams();
  body.append("grant_type", "authorization_code");
  body.append("code", code);
  body.append("redirect_uri", redirectUri);

  const response = await axios.post(
    BLING_ACCESS_TOKEN_URL,
    body.toString(),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${encodeCredentials()}`,
      },
    }
  );

  const { access_token, refresh_token, expires_in } = response.data;

  return saveBlingToken(userId, access_token, refresh_token, expires_in);
}

export async function saveBlingToken(
  userId: string,
  accessToken: string,
  refreshToken: string,
  expiresIn: number
) {
  const expiresAt = new Date(Date.now() + expiresIn * 1000);

  return prisma.blingAuth.upsert({
    where: { userId },
    update: { accessToken, refreshToken, expiresAt },
    create: { userId, accessToken, refreshToken, expiresAt },
  });
}

export async function getBlingToken(userId: string): Promise<string> {
  const auth = await prisma.blingAuth.findUnique({ where: { userId } });

  if (!auth) throw new Error("Usuário não autenticado no Bling");

  const now = Date.now();
  if (auth.expiresAt.getTime() - EXPIRATION_OFFSET < now) {
    
    const body = new URLSearchParams();
    body.append("grant_type", "refresh_token");
    body.append("refresh_token", auth.refreshToken);

    const response = await axios.post(
      BLING_ACCESS_TOKEN_URL,
      body.toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${encodeCredentials()}`,
        },
      }
    );

    const { access_token, refresh_token, expires_in } = response.data;

    await saveBlingToken(userId, access_token, refresh_token, expires_in);
    return access_token;
  }

  return auth.accessToken;
}
