export interface CompaniesBusiness {
  companiesBusinessErpId: string;
  companiesBusinessCompanyErpId: string;

  companiesBusinessCnpj: string;
  companiesBusinessMunicipalRegistration?: string;
  companiesBusinessStateRegistration?: string;

  companiesBusinessName: string;
  companiesBusinessFantasyName?: string;

  companiesBusinessEmail?: string;
  companiesBusinessPhone?: string;
  companiesBusinessCellPhone?: string;

  companiesBusinessAddressErpId?: string;
  companiesBusinessStreet?: string;
  companiesBusinessNumber?: string;
  companiesBusinessComplement?: string;
  companiesBusinessNeighborhood?: string;
  companiesBusinessCity?: string;
  companiesBusinessUf?: string;
  companiesBusinessZipCode?: string;
}
