import { prisma } from "@prisma/client"
import axios from "axios";

export async function refreshBlingToken(userId: string): Promise<string> {
  const auth = await prisma.blingAuth.findUnique({ where: { userId } });
  if (!auth || !auth.refreshToken) throw new Error("Nenhum refresh token disponível para esse usuário.");

  const credentials = Buffer.from(`${process.env.BLING_CLIENT_ID}:${process.env.BLING_CLIENT_SECRET}`).toString("base64");

  const body = new URLSearchParams();
  body.append("grant_type", "refresh_token");
  body.append("refresh_token", auth.refreshToken);

  const response = await axios.post(process.env.BLING_ACCESS_TOKEN_URL!, body.toString(), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${credentials}`,
    },
  });

  const accessToken = response.data.access_token;
  const refreshToken = response.data.refresh_token;
  const expiresAt = new Date(Date.now() + response.data.expires_in * 1000);

  await prisma.blingAuth.update({
    where: { userId },
    data: { accessToken, refreshToken, expiresAt },
  });

  return accessToken;
}
