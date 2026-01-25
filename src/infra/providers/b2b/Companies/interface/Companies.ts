import { CompaniesBusiness } from "../../Business/interface/Business";

export interface Companies {
  companiesErpId: string;
  companiesKey: number;
  companiesApiKey: string;

  companiesLogoImg?: string;
  companiesDeadlineType?: string;
  companiesTools?: string;
  companiesDefaultCarriers?: number;

  companiesBusiness: CompaniesBusiness;
}
