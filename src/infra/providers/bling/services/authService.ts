import { prisma } from "../../../../prisma";
import axios from "axios";
import { BlingCompanyResponse } from "../Companies/interface/BlingCompanyResponse";

const BLING_ACCESS_TOKEN_URL = process.env.BLING_ACCESS_TOKEN_URL!;
const BLING_CLIENT_ID = process.env.BLING_CLIENT_ID!;
const BLING_CLIENT_SECRET = process.env.BLING_CLIENT_SECRET!;
const BLING_API_BASE = process.env.BLING_URL!;
const EXPIRATION_OFFSET = 5_000;

function encodeCredentials() {
  return Buffer.from(`${BLING_CLIENT_ID}:${BLING_CLIENT_SECRET}`).toString("base64");
}

export async function exchangeCodeForToken(code: string, redirectUri: string) {
  const body = new URLSearchParams();
  body.append("grant_type", "authorization_code");
  body.append("code", code);
  body.append("redirect_uri", redirectUri);

  const tokenResponse = await axios.post(
    BLING_ACCESS_TOKEN_URL,
    body.toString(),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${encodeCredentials()}`,
        "enable-jwt": "1",
      },
    }
  );

  const { access_token, refresh_token, expires_in } = tokenResponse.data;

  const companyResponse = await axios.get(
    `${BLING_API_BASE}/empresas/me/dados-basicos`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
        "enable-jwt": "1",
      },
    }
  );

  const blingCompany = companyResponse.data.data;

  await saveBlingToken({
    blingCompanyId: blingCompany.id,
    accessToken: access_token,
    refreshToken: refresh_token,
    expiresIn: expires_in,
    companyData: blingCompany,
  });

  return blingCompany;
}

async function saveBlingToken({
  blingCompanyId,
  accessToken,
  refreshToken,
  expiresIn,
  companyData,
}: {
  blingCompanyId: string;
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  companyData?: BlingCompanyResponse;
}) {
  const expiresAt = new Date(Date.now() + expiresIn * 1000);

  await prisma.blingCompany.upsert({
    where: { blingCompanyId },
    update: companyData ? {
      nome: companyData.nome,
      cnpj: companyData.cnpj,
      email: companyData.email,
    } : {},
    create: { 
      blingCompanyId,
      nome: companyData?.nome,
      cnpj: companyData?.cnpj,
      email: companyData?.email,
    },
  });

  return prisma.blingAuth.upsert({
    where: { blingCompanyId },
    update: { accessToken, refreshToken, expiresAt },
    create: { accessToken, refreshToken, expiresAt, blingCompany: { connect: {blingCompanyId}} },
  });
}

export async function getBlingToken(blingCompanyId: string): Promise<string> {
  const auth = await prisma.blingAuth.findUnique({
    where: { blingCompanyId },
  });

  if (!auth) throw new Error("Empresa não autenticada no Bling");

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
          "enable-jwt": "1",
        },
      }
    );

    const { access_token, refresh_token, expires_in } = response.data;

    await saveBlingToken({
      blingCompanyId,
      accessToken: access_token,
      refreshToken: refresh_token,
      expiresIn: expires_in,
    });

    return access_token;
  }

  return auth.accessToken;
}
