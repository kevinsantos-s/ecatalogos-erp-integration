import { CoreCategory } from "../interface/CoreCategory";
import { Category } from "@/infra/providers/b2b/Categories/interface/Category";

export function coreToB2BCategory(
  category: CoreCategory
): Category {
  return {
    categoriesErpId: category.erpId,
    categoriesName: category.name,
  };
}
