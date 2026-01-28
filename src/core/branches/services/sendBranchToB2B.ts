import { coreToB2B } from "../mappers/coreToB2BBranch";
import { b2bClient } from "../../../infra/providers/b2b/services/b2bClient";
import { CoreBranch } from "../interface/CoreBranch";

export async function sendBranchToB2B(
  branch: CoreBranch,
) {
  const payloadB2B = coreToB2B(branch);

  console.log("Payload B2B:", JSON.stringify(payloadB2B, null, 2));

  const response = await b2bClient.post("/branches", payloadB2B);
  return response.data;
}
