import { $Enums } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

export interface budgetsFindAll {
  id: number;
  created_at: Date;
  name: string;
  quantity: number;
  payment_methods_id: number;
  payment_conditions_id: number;
}

export interface budgetsEdit {
  orderId: number;
  status?: $Enums.orders_status;
  observation?: string;
  carrier_id?: number;
  is_estimate?: boolean;
  gross_value?: number;
  final_value?: number;
  payment_method_id?: number;
  payment_condition_id?: number;
  adjustment_factor?: number;
  address_id?: number;
  deadline?: string;
  deadline_init?: Date;
  deadline_final?: Date;
  orders_brands?: number[];
  orders_variants?: Array<{
    deleted: Date;
    variant_id: number;
    order_variant_id?: number;
    skus: Array<{
      id: number;
      quantity: number;
    }>;
    products: {
      branch_id: number
    }[]
  }>;

  branches:{
    name: string,
    id: number,
  }
}

export interface OrderDetail {
  id: number;
  number?: string | null | undefined;
  products?: DetailedProduct[];
}

export interface DetailedSku {
  size?: string | null;
  quantity?: number;
  price?: number;
  multiple_quantity?: number;
  pack_value?: number;
}

export interface DetailedProduct {
  id: number;
  variant_id: number;
  reference?: string | null;
  product_name?: string | null;
  brand?: number | null
  brand_name?: string | null;
  brand_image?: string | null;
  purchasePackQuantity?: number;
  skus?: DetailedSku[];
}
