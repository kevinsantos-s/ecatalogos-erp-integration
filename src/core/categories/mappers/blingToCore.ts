import { CoreCategory } from "../interface/CoreCategory";
import { BlingCategoryResponse } from "@/infra/providers/bling/Categories/interface/BlingCategoryResponse";

export function blingToCoreCategory(
  bling: BlingCategoryResponse
): CoreCategory {
  return {
    erpId: `ERP-${bling.id}`,
    name: bling.descricao,
  };
}
