"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/infra/providers/bling/blingTest.ts
const blingApi_1 = require("./services/blingApi");
require("dotenv/config");
async function testBlingConnection() {
    try {
        // Passa apenas o path relativo do endpoint
        const data = await (0, blingApi_1.blingGet)("/produtos");
        console.log("Conexão com Bling OK!", data);
    }
    catch (error) {
        // Mostra mensagem de erro detalhada
        console.error("Erro na conexão com Bling:", error.response?.data || error.message);
    }
}
// Executa o teste
testBlingConnection();
