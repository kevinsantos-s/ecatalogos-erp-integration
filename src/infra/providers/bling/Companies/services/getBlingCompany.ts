import { blingGet } from "../../../../../infra/providers/bling/services/blingClient";
import { BlingCompanyResponse } from "../interface/BlingCompanyResponse";

export async function getBlingCompany(): Promise<BlingCompanyResponse> {
  const response = await blingGet<{ data: BlingCompanyResponse }>("/empresas/me/dados-basicos");
  return response.data; 
}
