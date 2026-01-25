import { blingGet } from "../../services/blingClient";
import { BlingCategoryResponse } from "../interface/BlingCategoryResponse";

export async function getBlingCategory(): Promise<BlingCategoryResponse[]> {
  return blingGet<BlingCategoryResponse[]>("/categorias/produtos");
}
