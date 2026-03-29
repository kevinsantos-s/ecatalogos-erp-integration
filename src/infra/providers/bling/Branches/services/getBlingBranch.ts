import { blingGet } from "../../../../../infra/providers/bling/services/blingClient";
import { BlingBranchResponse } from "../interface/BlingBranchResponse";

export async function getBlingBranch(
  IdcanalVenda: number
): Promise<BlingBranchResponse> {
  const response = await blingGet<BlingBranchResponse>(
    `/canais-venda/${IdcanalVenda}`
  );

  return response;
}
