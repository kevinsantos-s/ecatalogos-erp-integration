export interface CoreCompanyBusiness {
  companyErpId: string;

  cnpj: string;
  municipalRegistration?: string;
  stateRegistration?: string;

  name: string;
  fantasyName?: string;

  email?: string;
  phone?: string;
  cellPhone?: string;

  addressErpId?: string;
  street?: string;
  number?: string;
  complement?: string;
  neighborhood?: string;
  city?: string;
  uf?: string;
  zipCode?: string;
  companiesBusinessErpId: string;
}
