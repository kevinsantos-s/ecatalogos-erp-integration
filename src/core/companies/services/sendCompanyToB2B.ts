import { coreToB2B } from "../mappers/coreToB2B";
import { b2bClient } from "../../../infra/providers/b2b/services/b2bClient";
import { CoreCompany } from "../interface/CoreCompany";
import { CoreCompanyBusiness } from "../interface/CoreCompanyBusiness";

export async function sendCompanyToB2B(
  company: CoreCompany,
  business: CoreCompanyBusiness
) {
  const payloadB2B = coreToB2B(company, business);

  console.log("Payload B2B:", JSON.stringify(payloadB2B, null, 2));

  const response = await b2bClient.post("/companies", payloadB2B);
  return response.data;
}
