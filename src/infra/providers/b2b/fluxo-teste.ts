import { getBlingCompany } from "../../../infra/providers/bling/Companies/services/getBlingCompany";
import { blingToCore } from "../../../core/companies/mappers/blingToCore";
import { coreToB2B } from "../../../core/companies/mappers/coreToB2B";

async function fluxoTeste() {
  const blingCompanyResponse = await getBlingCompany();

  const { company, business } = blingToCore(blingCompanyResponse);

  const payloadB2B = coreToB2B(company, business);
  
  console.log(JSON.stringify(payloadB2B, null, 2));
}

fluxoTeste();
