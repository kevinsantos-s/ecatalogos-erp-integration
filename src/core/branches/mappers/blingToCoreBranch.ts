import { BlingBranchResponse, BlingBranch } from "../../../infra/providers/bling/Branches/interface/BlingBranchResponse";
import { CoreBranch } from "../interface/CoreBranch";

export function blingToCoreBranch(
  bling: BlingBranchResponse["data"],
  filial: BlingBranch,
  companyErpId
): CoreBranch {
  return {
    erpId: `${companyErpId}-${filial.idUnidadeNegocio}`, 
    name: filial.unidadeNegocio || bling.descricao,
    companyErpId,

    business: {
      erpId: companyErpId,
      cnpj: filial.cnpj,
      name: filial.unidadeNegocio,
    },

    address: {
      erpId: `${companyErpId}-${filial.idUnidadeNegocio}`,
    },

    isDefault: filial.padrao,
  };
}
