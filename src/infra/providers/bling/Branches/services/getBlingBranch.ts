import { blingGet } from "../../../../../infra/providers/bling/services/blingClient";
import { BlingBranchResponse } from "../interface/BlingBranchResponse";

export async function getBlingBranch(
  canalVendaId: number
): Promise<BlingBranchResponse> {
  const response = await blingGet<BlingBranchResponse>(
    `/canais-vendas/${canalVendaId}`
  );

  return response;
}
