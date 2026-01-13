import { getBlingCompany } from "../../../infra/providers/bling/Companies/services/getBlingCompany";
import { blingToCore } from "../mappers/blingToCore";
import { coreToB2B } from "../mappers/coreToB2B";
import { b2bClient } from "../../../infra/providers/b2b/services/b2bClient";

export async function sendCompanyToB2B() {
  const blingCompany = await getBlingCompany();
  const { company, business } = blingToCore(blingCompany);
  const payloadB2B = coreToB2B(company, business);

  
  console.log("Payload B2B:", JSON.stringify(payloadB2B, null, 2));
  const response = await b2bClient.post("/companies", payloadB2B);
  return response.data;
}
