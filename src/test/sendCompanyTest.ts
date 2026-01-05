import { sendCompanyToB2B } from "../core/companies/services/sendCompanyToB2B";

(async () => {
  try {
    const res = await sendCompanyToB2B();
    console.log("✅ Empresa enviada com sucesso para o B2B:");
    console.log(JSON.stringify(res, null, 2));
  } catch (err) {
    console.error("❌ Erro ao enviar empresa:", err);
  }
})();
