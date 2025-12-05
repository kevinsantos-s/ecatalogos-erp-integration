export interface Products {
  name: string;
  reference: string;
  branches: {
    id: number;
    name: string;
  };
  prompt_delivery: number;
  description: string;
  erp_id: string;
  deadline_id: number;
  composition_data: string;
  technical_information: string;
  ipi: number;
  is_discontinued: number;
  is_launch: number;
  is_visible: number;
  colection: string;
  st: number;
  gender_id: number;
  category_id: number;
  subcategory_id: number;
  blocked_products_attendants: { id: number };
  blocked_products_regions: { id: number };
  blocked_products_shopkeeper: { id: number };
  colors: { id: number };
  brands: { id: number };
  categories: { id: number };
  companies: { id: number };
  deadlines: { id: number };
  gender: { id: number };
  subcategories: { id: number };
  variants: { id: number };
}