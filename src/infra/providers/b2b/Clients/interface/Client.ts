export interface Client {
  id: number;
  name: string;
  cpf: string;
  email: string;
  phone?: string;
  cell_phone: string;
  company_id: number;
  business_id?: number;
  erp_id?: string;
  rg?: string;
  is_shopkeeper: boolean;
  have_credit: boolean;
  addresses_clients_id?: { id: number };
  clients_carriers_id?: { id: number };
  links_clients?: { id: number };
  orders_id?: { id: number };
  price_table_clients_id?: { id: number };
  representatives_clients_id?: { id: number };
  shopkeepers_id?: { id: number };
  user_clients_emails_id: { id: number };
  user_clients_id?: { id: number };
  shopkeepers?:{
    sent: boolean,
  }
}
