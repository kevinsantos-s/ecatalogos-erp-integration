export interface Brands {
  id: number;
  name: string;
  logo_img?: string;
  min_value: string;
  min_installments_value: string;
  visible?: boolean;
  skun_order?: string;
  address_id: number;
  business_id: number;
  company_id: number;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
  attendant_brands: {
    attendant_id: true;
  };
}
