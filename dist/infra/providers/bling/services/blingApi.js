"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blingGet = blingGet;
exports.blingPost = blingPost;
const axios_1 = __importDefault(require("axios"));
const authService_1 = require("./authService");
const BLING_BASE = process.env.BLING_URL;
async function blingGet(endpoint, config) {
    const token = await (0, authService_1.getBlingToken)();
    const url = `${BLING_BASE}${endpoint}`;
    const response = await axios_1.default.get(url, {
        headers: { Authorization: `Bearer ${token}` },
        timeout: 10000,
        ...config,
    });
    return response.data;
}
async function blingPost(endpoint, body, config) {
    const token = await (0, authService_1.getBlingToken)();
    const url = `${BLING_BASE}${endpoint}`;
    const response = await axios_1.default.post(url, body, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        timeout: 10000,
        ...config,
    });
    return response.data;
}
