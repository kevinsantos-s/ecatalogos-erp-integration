// import { $Enums } from "@prisma/client";
// import { Decimal } from "@prisma/client/runtime/library";
// export interface OrderSummary {
//   id: number;
//   number: string | null;
//   type: string | null;
//   clients: {
//     name: string;
//     business: {
//       fantasy_name: string;
//     };
//   };
//   is_estimate: boolean;
//   status: $Enums.orders_status;
//   created_at: Date;
//   updated_at?: Date;
//   product_count: number | undefined;
//   payment_method_id?: number | null;
// }
// export interface OrderDetail {
//   id: number;
//   number?: string | null | undefined;
//   products?: DetailedProduct[];
//   payment_methods: {
//     description: string | null;
//     min_value: Decimal | null;
//     price_adjustment: Decimal | null;
//   } | null;
//   payment_conditions: {
//     term: string | null;
//     installments: number | null;
//     minimum_value: Decimal | null;
//     price_adjustment: Decimal | null;
//   } | null;
//   gross_value: Decimal;
//   final_value: Decimal;
//   deadline?: string;
//   deadline_init?: Date;
//   deadline_final?: Date;
// }
// export interface DetailedProduct {
//   id: number;
//   name: string;
//   reference: string;
//   brand: number;
//   brand_name: string;
//   type: string;
//   gender: string;
//   promptDelivery: boolean;
//   description: string | null;
//   deadlineId: number | null;
//   informações_tecnicas: string | null;
//   technicalInformation: string | null;
//   open_grid: boolean;
//   ipi: Decimal;
//   isDiscontinued: boolean;
//   isLaunch: boolean;
//   isVisible: boolean;
//   variantId: number;
//   variantName: string;
//   hexCode: string | null;
//   categories: number;
//   subcategories: number | null;
//   images: {
//     path: string;
//     id: number;
//     company_id: number;
//     order: number;
//     companies: {
//       key: number;
//     };
//   }[];
//   skus: {
//     size: string;
//     price: Decimal | number;
//     multipleQuantity?: number;
//     quantityPurchased?: number;
//   }[];
//   variants: [
//     {
//       id: number;
//       name: string;
//       hex_code: string | null;
//       product_id: number;
//       images: {
//         path: string;
//         id: number;
//         company_id: number;
//         order: number;
//         companies: {
//           key: number;
//         };
//       }[];
//     }
//   ];
// }
