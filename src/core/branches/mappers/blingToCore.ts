import { BlingBranchResponse, BlingBranch } from "../../../infra/providers/bling/Branches/interface/BlingBranchResponse";
import { CoreBranch } from "../interface/CoreBranch";

export function blingToCore(
  bling: BlingBranchResponse["data"],
  filial: BlingBranch
): CoreBranch {
  return {
    erpId: `ERP-String(filial.idUnidadeNegocio)`,
    name: filial.unidadeNegocio || bling.descricao,

    business: {
      erpId: `ERP-${String(filial.idUnidadeNegocio)}`,
      cnpj: filial.cnpj,
      name: filial.unidadeNegocio,
    },

    isDefault: filial.padrao,
  };
}
