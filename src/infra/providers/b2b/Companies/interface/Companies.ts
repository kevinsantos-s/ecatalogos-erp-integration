import { CompaniesBusiness } from "../../Business/interface/Business";

export type CompaniesDeadlineType = "DEFINIDO" | "INDEFINIDO";

export interface Companies {
  companiesErpId: string;
  companiesKey: number;
  companiesApiKey: string;

  companiesLogoImg?: string;
  companiesDeadlineType?: CompaniesDeadlineType;
  companiesTools?: string;
  companiesDefaultCarriers?: number;

  companiesBusiness: CompaniesBusiness;
}
