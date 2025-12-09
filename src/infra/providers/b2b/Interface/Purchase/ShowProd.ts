// import { $Enums } from "@prisma/client";
// import { Decimal } from "@prisma/client/runtime/library";

// export interface ProdFindAll {
//   offSet: number;
//   limit: number;
//   id?: number;
//   name?: string;
//   reference?: string;
//   type?: number;
//   prompt_delivery?: boolean;
//   description?: string;
//   company_id?: number;
//   erp_id?: string;
//   brand_id?: number;
//   deadline_id?: number;
//   created_at?: Date;
//   updated_at?: Date;
//   deleted_at?: Date;
//   composition_data?: string;
//   technical_information?: string;
//   open_grid?: boolean;
//   ipi?: number;
//   is_discontinued?: boolean;
//   is_launch?: boolean;
//   is_visible?: boolean;
//   colection?: string;
//   st?: number;
//   gender_id?: number;
//   category_id?: number;
//   subcategory_id?: number;
// }

// export interface ProdCreate {
//   id: number;
//   name: string;
//   reference: string;
//   type: string;
//   prompt_delivery: boolean;
//   description?: string;
//   company_id: number;
//   erp_id?: number;
//   brand_id: number;
//   deadline_id?: number;
//   created_at: Date;
//   updated_at?: Date;
//   deleted_at?: Date;
//   composition_data?: string;
//   technical_information?: string;
//   open_grid: boolean;
//   ipi: number;
//   is_discontinued: boolean;
//   is_launch: boolean;
//   is_visible: boolean;
//   colection?: string;
//   st: number;
//   gender_id: number;
//   category_id: number;
//   subcategory_id?: number;
// }

// export interface ProdOrderCompletion {
//   name: string;
//   reference: string;
//   brand_id: number;
//   gender_id: number;
//   category_id: number;
//   subcategory_id?: number;
// }
// export interface CreateOrderInput {
//   numero: string | number;
//   user_id: number;
//   status: $Enums.orders_status;
//   observation?: string;
//   is_estimate: boolean;
//   client_id: number;
//   company_id: number;
//   price_table_id: number;
//   payment_method_id: number;
//   payment_condition_id: number;
//   address_id: number;
//   adjustment_factor: number;
//   gross_value: number;
//   final_value: number;
//   budgetDuration?: number;
//   experies_at?: Date;
//   products: {
//     variant_id: number;
//     skus: Array<{ id: number; quantity: number }>;
//     quantity: number;
//   }[];
//   carrier_id?: number;
// }
