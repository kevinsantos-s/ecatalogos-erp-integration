import { getBlingBranch } from "../../infra/providers/bling/Branches/services/getBlingBranch";
import { blingToCore } from "../../core/branches/mappers/blingToCore";
import { sendBranchToB2B } from "../../core/branches/services/sendBranchToB2B";
import { CompaniesService } from "../../modules/companies/companies.service";
import { isAxiosError } from "../../shared/errors/isAxiosError";

export class BranchesService {
  private companiesService = new CompaniesService(); 

  async sendBranch(blingBranchId: number, blingCompanyId: number) {
    try {
      const blingBranch = await getBlingBranch(blingBranchId);

      if (!blingBranch.data.filiais || blingBranch.data.filiais.length === 0) {
        throw new Error("Nenhuma filial encontrada");
      }

      const companyErpId = await this.companiesService.getCompany(blingCompanyId);

      const results = [];
      for (const filial of blingBranch.data.filiais) {
      const coreBranch = blingToCore(blingBranch.data, filial, companyErpId);
      const result = await sendBranchToB2B(coreBranch);
      results.push(result);
      }

      return {
        message: `${results.length} filial enviada com sucesso`,
        results
      };
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        const status = error.response?.status;

        if (status === 409) {
          throw error;
        }
      }

      throw error;
    }
  }
}
