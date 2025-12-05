// src/infra/providers/bling/authService.ts
import axios from "axios";
import fs from "fs";
import path from "path";

const statePath = path.resolve(__dirname, "blingState.json");

interface BlingState {
    access_token: string | null;
    refresh_token: string | null;
    expires_at: number | null;
}

let currentAccessToken: string | null = null;
let currentRefreshToken: string | null = null;
let tokenExpiresAt: number | null = null;

const EXPIRATION_OFFSET = 5000; 

export function loadInitialAuthState() {
    if (!fs.existsSync(statePath)) {
        console.log("Nenhum blingState.json encontrado.");
        currentRefreshToken = process.env.BLING_REFRESH_TOKEN || null;
        return;
    }

    const data = fs.readFileSync(statePath, "utf-8");
    const state: BlingState = JSON.parse(data);

    currentAccessToken = state.access_token;
    currentRefreshToken = state.refresh_token;
    tokenExpiresAt = state.expires_at;

    console.log("Estado carregado do blingState.json");
}

function saveState() {
    const state: BlingState = {
        access_token: currentAccessToken,
        refresh_token: currentRefreshToken,
        expires_at: tokenExpiresAt,
    };

    fs.writeFileSync(statePath, JSON.stringify(state, null, 2));
}

export async function refreshBlingToken(): Promise<string> {
    if (!currentRefreshToken) {
        throw new Error("Nenhum refresh token disponível.");
    }

    console.log("Renovando token do Bling..");

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

    saveState();

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
