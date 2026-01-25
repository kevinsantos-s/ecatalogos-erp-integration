import { CoreCompany } from "../interface/CoreCompany";
import { CoreCompanyBusiness } from "../interface/CoreCompanyBusiness";
import { Companies } from "../../../infra/providers/b2b/Companies/interface/Companies";

export function coreToB2B(
  company: CoreCompany,
  business: CoreCompanyBusiness
): Companies {

    const companiesKey = parseInt(company.erpId.replace(/\D/g, "").slice(0, 4)) || 1;

    return {

    companiesErpId: company.erpId,
    companiesKey,
    companiesApiKey: company.apiKey,
    companiesLogoImg: company.logoImg,
    companiesDeadlineType: company.deadlineType,
    companiesTools: company.tools,
    companiesDefaultCarriers: company.defaultCarriers,

    companiesBusiness: {
      companiesBusinessErpId: business.companiesBusinessErpId,
      companiesBusinessCompanyErpId: business.companyErpId,
      companiesBusinessCnpj: business.cnpj,
      companiesBusinessName: business.name,
      companiesBusinessFantasyName: business.fantasyName,
      companiesBusinessEmail: business.email,
      companiesBusinessPhone: business.phone,
      companiesBusinessCellPhone: business.cellPhone,
      companiesBusinessStreet: business.street,
      companiesBusinessNumber: business.number,
      companiesBusinessNeighborhood: business.neighborhood,
      companiesBusinessCity: business.city,
      companiesBusinessUf: business.uf,
      companiesBusinessZipCode: business.zipCode,
    },
  };
}
