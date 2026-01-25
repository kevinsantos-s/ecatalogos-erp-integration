import { randomUUID } from "crypto";
import { CoreCategory } from "../interface/CoreCategory";
import { BlingCategoryResponse } from "@/infra/providers/bling/Categories/interface/BlingCategoryResponse";

export function blingToCoreCategory(
  bling: BlingCategoryResponse
): CoreCategory {
  return {
    erpId: `ERP-${randomUUID().slice(0, 8)}`,
    name: bling.descricao,
  };
}
