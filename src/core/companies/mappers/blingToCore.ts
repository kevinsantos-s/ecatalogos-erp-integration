import { BlingCompanyResponse } from "../../../infra/providers/bling/Companies/interface/BlingCompanyResponse";
import { CoreCompany } from "../interface/CoreCompany";
import { CoreCompanyBusiness } from "../interface/CoreCompanyBusiness";

export function blingToCore(
  bling: BlingCompanyResponse
): { company: CoreCompany; business: CoreCompanyBusiness } {

  const numericId = bling.id.replace(/\D/g, "").padStart(4, "0").slice(0, 4);

  return {
    company: {
      erpId: `ERP-${numericId}`,        
      apiKey: `API-KEY-${bling.id}`,                
      deadlineType: "DEFINIDO",                    
      tools: "B2B",                              
    },
    business: {
      companiesBusinessErpId: `ERP-BUS-${numericId}`,   
      companyErpId: `ERP-${numericId}`, 
      cnpj: bling.cnpj.replace(/\D/g, ""),       
      name: bling.nome,
      fantasyName: bling.nome,
      email: bling.email || "",
      phone: "",            
      cellPhone: "",        
      street: "",           
      number: "",           
      neighborhood: "",     
      city: "",             
      uf: "",               
      zipCode: "",        
      municipalRegistration: "", 
      stateRegistration: "",     
    },
  };
}
