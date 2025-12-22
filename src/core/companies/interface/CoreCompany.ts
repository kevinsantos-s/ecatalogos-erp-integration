export interface CoreCompany {
  erpId: string;
  key: number;
  apiKey: string;

  logoImg?: string;
  deadlineType?: "DEFINIDO" | "INDEFINIDO";
  tools?: string;

  defaultCarriers?: number;
}
