import { coreToB2BCategory } from "../mappers/coreToB2BCategory";
import { b2bClient } from "../../../infra/providers/b2b/services/b2bClient";
import { CoreCategory } from "../interface/CoreCategory";

export async function sendCategoryToB2B(
  category: CoreCategory
) {
  const payloadB2B = coreToB2BCategory(category);

  console.log("Payload B2B:", JSON.stringify(payloadB2B, null, 2));

  const response = await b2bClient.post("/categories", payloadB2B);
  return response.data;
}
