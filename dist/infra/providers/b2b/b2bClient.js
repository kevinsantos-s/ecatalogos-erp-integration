"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.b2bClient = void 0;
const axios_1 = __importDefault(require("axios"));
exports.b2bClient = axios_1.default.create({
    baseURL: process.env.B2B_API_URL,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.B2B_API_TOKEN}`,
    },
});
