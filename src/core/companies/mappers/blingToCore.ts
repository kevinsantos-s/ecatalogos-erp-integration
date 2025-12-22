import { BlingCompanyResponse } from "@/infra/providers/bling/Companies/interface/BlingCompanyResponse";
import { CoreCompany } from "../interface/CoreCompany";
import { CoreCompanyBusiness } from "../interface/CoreCompanyBusiness";

export function blingToCore(
  bling: BlingCompanyResponse
): { company: CoreCompany; business: CoreCompanyBusiness } {
  return {
    company: {
      erpId: bling.id,
      name: bling.nome,
      // ...
    },
    business: {
      cnpj: bling.cnpj,
      // ...
    }
  };
}
