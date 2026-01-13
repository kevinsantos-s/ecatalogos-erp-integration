import { getBlingCompany } from "@/infra/providers/bling/Companies/services/getBlingCompany";
import { blingToCore } from "@/core/companies/mappers/blingToCore";
import { sendCompanyToB2B } from "@/core/companies/services/sendCompanyToB2B";

export class CompaniesService {
  async sendCompany(blingCompanyId: number) {
    const blingCompany = await getBlingCompany(blingCompanyId);

    const { company, business } = blingToCore(blingCompany);

    return sendCompanyToB2B(company, business);
  }
}
