import { getBlingBranch } from "../../infra/providers/bling/Branches/services/getBlingBranch";
import { getAllBlingChannels } from "../../infra/providers/bling/Branches/services/getAllBlingChannels";
import { blingToCoreBranch } from "../../core/branches/mappers/blingToCoreBranch";
import { sendBranchToB2B } from "../../core/branches/services/sendBranchToB2B";
import { isAxiosError } from "../../shared/errors/isAxiosError";

export class BranchesService {
  async syncBranches(companyErpId: string) {

     if (!companyErpId) {
      throw new Error("companyErpId é obrigatório");
    }

    let synced = 0;
    let alreadyExists = 0;

    const channelsResponse = await getAllBlingChannels();
    const channels = channelsResponse.data || [];

    for (const channel of channels) {
      const branchResponse = await getBlingBranch(channel.id);
      const filiais = branchResponse.data?.filiais || [];

      for (const filial of filiais) {
        const coreBranch = blingToCoreBranch(
          branchResponse.data,
          filial,
          companyErpId
        );

        try {
          await sendBranchToB2B(coreBranch);
          synced++;
        } catch (error) {
          if (isAxiosError(error) && error.response?.status === 409) {
            alreadyExists++;
            continue;
          }
          throw error;
        }
      }
    }

    return {
      total: synced + alreadyExists,
      synced,
      alreadyExists,
    };
  }
}