// src/infra/providers/bling/blingTest.ts
import { blingGet } from "./services/blingApi";
import "dotenv/config";

async function testBlingConnection() {
  try {
    // Passa apenas o path relativo do endpoint
    const data = await blingGet("/produtos");
    console.log("Conexão com Bling OK!", data);
  } catch (error: any) {
    // Mostra mensagem de erro detalhada
    console.error("Erro na conexão com Bling:", error.response?.data || error.message);
  }
}

// Executa o teste
testBlingConnection();
