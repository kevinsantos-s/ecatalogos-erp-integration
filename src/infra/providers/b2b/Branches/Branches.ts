export interface Branches {
  branchesErpId?: string;
  branchesName: string;

  branchesCompanyErpId?: string;

  branchesBusiness?: {
    branchesBusinessErpId?: string;
    branchesBusinessCnpj?: string;
    branchesBusinessMunicipalRegistration?: string;
    branchesBusinessStateRegistration?: string;
    branchesBusinessName?: string;
    branchesBusinessFantasyName?: string;
    branchesBusinessEmail?: string;
    branchesBusinessPhone?: string;
    branchesBusinessCellPhone?: string;

    branchesBusinessAddressErpId?: string;
    branchesBusinessStreet?: string;
    branchesBusinessNumber?: string;
    branchesBusinessComplement?: string;
    branchesBusinessNeighborhood?: string;
    branchesBusinessCity?: string;
    branchesBusinessUf?: string;
    branchesBusinessZipCode?: string;
  };
}
