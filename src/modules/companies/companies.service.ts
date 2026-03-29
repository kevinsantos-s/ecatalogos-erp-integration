import { getBlingCompany } from "../../infra/providers/bling/Companies/services/getBlingCompany";
import { blingToCoreCompany } from "../../core/companies/mappers/blingToCoreCompany";
import { sendCompanyToB2B } from "../../core/companies/services/sendCompanyToB2B";
import { CompanyAlreadyExistsError } from "./errors/CompanyAlreadyExistError";
import { isAxiosError } from "../../shared/errors/isAxiosError";
export class CompaniesService {
  async sendCompany(blingCompanyId: number) {
    
    try {
      const blingCompany = await getBlingCompany(blingCompanyId);
      const { company, business } = blingToCoreCompany(blingCompany);
      const result = await sendCompanyToB2B(company, business);

      return {
        erpId: company.erpId, 
        ...result, 
      };
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        const status = error.response?.status;

        if (status === 409) {
          throw new CompanyAlreadyExistsError();
        }
      }

      throw error;
    }
  }
  async getCompany(blingCompanyId: number) {
    const blingCompany = await getBlingCompany(blingCompanyId)
    const { company } = blingToCoreCompany(blingCompany)
    return company.erpId;
  }
}
