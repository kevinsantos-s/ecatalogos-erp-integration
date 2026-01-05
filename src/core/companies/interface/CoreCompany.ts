export interface CoreCompany {
  erpId: string;
  apiKey: string;

  logoImg?: string;
  deadlineType?: "DEFINIDO" | "INDEFINIDO";
  tools?: string;

  defaultCarriers?: number;
}
