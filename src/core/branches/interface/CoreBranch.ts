export interface CoreBranch {
  erpId: string;
  name: string;

  business?: {
    erpId?: string;
    cnpj?: string;
    name?: string;
  };

  address?: {
    street?: string;
    number?: string;
    complement?: string;
    neighborhood?: string;
    city?: string;
    state?: string;
    zipCode?: string;
  };

  isDefault?: boolean;
}
