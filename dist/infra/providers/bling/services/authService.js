"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshBlingToken = refreshBlingToken;
exports.getBlingToken = getBlingToken;
const axios_1 = __importDefault(require("axios"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
require("dotenv/config");
let currentAccessToken = process.env.BLING_ACCESS_TOKEN || null;
let currentRefreshToken = process.env.BLING_REFRESH_TOKEN || null;
let tokenExpiresAt = null;
const EXPIRATION_OFFSET = 5000;
// caminho do .env
const envPath = path_1.default.resolve(".env");
// função para salvar variável no .env
function saveEnv(key, value) {
    let env = fs_1.default.readFileSync(envPath, "utf-8");
    const regex = new RegExp(`^${key}=.*$`, "m");
    if (regex.test(env)) {
        env = env.replace(regex, `${key}=${value}`);
    }
    else {
        env += `\n${key}=${value}`;
    }
    fs_1.default.writeFileSync(envPath, env);
}
async function refreshBlingToken() {
    if (!currentRefreshToken) {
        throw new Error("Nenhum refresh token disponível.");
    }
    console.log("Renovando token do Bling...");
    const credentials = Buffer.from(`${process.env.BLING_CLIENT_ID}:${process.env.BLING_CLIENT_SECRET}`).toString("base64");
    const body = new URLSearchParams();
    body.append("grant_type", "refresh_token");
    body.append("refresh_token", currentRefreshToken);
    const response = await axios_1.default.post(process.env.BLING_ACCESS_TOKEN_URL, body.toString(), {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${credentials}`,
        },
    });
    currentAccessToken = response.data.access_token;
    currentRefreshToken = response.data.refresh_token;
    tokenExpiresAt = Date.now() + response.data.expires_in * 1000;
    saveEnv("BLING_ACCESS_TOKEN", currentAccessToken);
    saveEnv("BLING_REFRESH_TOKEN", currentRefreshToken);
    console.log("Token atualizado com sucesso!");
    return currentAccessToken;
}
async function getBlingToken() {
    if (!currentAccessToken || !tokenExpiresAt) {
        return refreshBlingToken();
    }
    const needsRefresh = Date.now() > tokenExpiresAt - EXPIRATION_OFFSET;
    if (needsRefresh) {
        return refreshBlingToken();
    }
    return currentAccessToken;
}
