import { BlingCompanyResponse } from "../../../infra/providers/bling/Companies/interface/BlingCompanyResponse";
import { CoreCompany } from "../interface/CoreCompany";
import { CoreCompanyBusiness } from "../interface/CoreCompanyBusiness";

export function blingToCore(
  bling: BlingCompanyResponse
): { company: CoreCompany; business: CoreCompanyBusiness } {
  return {
    company: {
      erpId: `ERP-${bling.id.slice(0, 10)}`,        
      apiKey: `API-KEY-${bling.id}`,                
      deadlineType: "DEFINIDO",                    
      tools: "B2B",                              
    },
    business: {
      companiesBusinessErpId: `ERP-BUS-${bling.id.slice(0, 10)}`,   
      companyErpId: `ERP-${bling.id.slice(0, 10)}`, 
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
