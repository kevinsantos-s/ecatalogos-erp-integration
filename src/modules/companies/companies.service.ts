// src/modules/companies/companies.service.ts
import { getBlingCompany } from "../../infra/providers/bling/Companies/services/getBlingCompany";
import { blingToCore } from "../../core/companies/mappers/blingToCore";
import { sendCompanyToB2B } from "../../core/companies/services/sendCompanyToB2B";
import { CompanyAlreadyExistsError } from "./errors/CompanyAlreadyExistError";
import { isAxiosError } from "../../shared/errors/isAxiosError";
import { ApiErrorResponse } from "../../shared/types/ApiError";

export class CompaniesService {
  async sendCompany(blingCompanyId: number) {
    try {
      const blingCompany = await getBlingCompany(blingCompanyId);

      const { company, business } = blingToCore(blingCompany);

      return await sendCompanyToB2B(company, business);
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        const data = error.response?.data as ApiErrorResponse;
        const message = data?.message;

        if (message?.includes("ERP_ID existente")) {
          throw new CompanyAlreadyExistsError();
        }
      }

      throw error;
    }
  }
}