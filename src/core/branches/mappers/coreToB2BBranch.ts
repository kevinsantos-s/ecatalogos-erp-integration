import { CoreBranch } from "../interface/CoreBranch";
import { Branches } from "../../../infra/providers/b2b/Branches/Branches";

export function coreToB2BBranch(
  branch: CoreBranch
): Branches {
  return {
    branchesErpId: branch.erpId,
    branchesName: branch.name,

    branchesCompanyErpId: branch.companyErpId,

    branchesBusiness: {
    branchesBusinessErpId: `ERP-BUS-${Date.now()}`,
    branchesBusinessCnpj: branch.business?.cnpj || '',
    branchesBusinessName: branch.business?.name || '',
    branchesBusinessFantasyName: branch.business?.name || '',

    branchesBusinessStreet: branch.address?.street || '',
    branchesBusinessNumber: branch.address?.number || '',
    branchesBusinessComplement: branch.address?.complement || '',
    branchesBusinessNeighborhood: branch.address?.neighborhood || '',
    branchesBusinessCity: branch.address?.city || '',
    branchesBusinessUf: branch.address?.state || '',
    branchesBusinessZipCode: branch.address?.zipCode || '',

    branchesBusinessAddressErpId: `ERP-${Date.now()}`
    },
  };
}
