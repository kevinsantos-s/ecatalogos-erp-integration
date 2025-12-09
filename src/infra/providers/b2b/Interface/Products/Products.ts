export interface Product {
  id: number;
  name: string;
  reference: string;
  branch_id: number
  prompt_delivery: boolean;
  description?: string;
  company_id: number;
  erp_id?: string;
  brand_id: number;
  deadline_id?: number;
  composition_data?: string;
  technical_information?: string;
  open_grid: boolean;
  ipi: number;
  is_discontinued: boolean;
  is_launch: boolean;
  is_visible: boolean;
  colection?: string;
  st: number;
  gender_id: number;
  category_id: number;
  subcategory_id?: number;
}
