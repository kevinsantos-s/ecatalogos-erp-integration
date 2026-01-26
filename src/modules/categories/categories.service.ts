import { getBlingCategory } from "../../infra/providers/bling/Categories/services/getBlingCategory";
import { blingToCoreCategory } from "../../core/categories/mappers/blingToCore";
import { sendCategoryToB2B } from "../../core/categories/services/sendCategoryToB2B";
import { isAxiosError } from "../../shared/errors/isAxiosError";

export class CategoriesService {
  async syncCategories() {
    const blingResponse = await getBlingCategory();
    
    const blingCategories = Array.isArray(blingResponse) 
      ? blingResponse 
      : Array.isArray((blingResponse as { data?: unknown }).data)
        ? (blingResponse as { data: unknown[] }).data
        : [];
    
    const coreCategories = blingCategories.map(blingToCoreCategory);

    let synced = 0;

    for (const category of coreCategories) {
      try {
        await sendCategoryToB2B(category);
        synced++;
      } catch (error: unknown) {
        if (isAxiosError(error) && error.response?.status === 409) {
          continue;
        }

        throw error;
      }
    }

    return {
      total: coreCategories.length,
      synced,
    };
  }
}