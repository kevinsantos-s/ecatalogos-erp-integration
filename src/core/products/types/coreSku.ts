// core/types/Product.ts
export interface CoreSku {
  skusErpId: string;     // bling id
  skusCode: string;
  skusSize?: string;   
  skusPrice?: number;
  skusStock: number;     
  skusHeight?: number;
  skusLength?: number;
  skusWidth?: number;
  skusWeight?: number;
  skusNcm?: string;
  skusCest?: string;
  variantErpId?: string; // color variant
}

export interface CoreProduct {
  productErpId: number; // bling id
  productName: string;
  productReference?: string;
  productDescription?: string;
  productCategoryErpId?: string;
  skus: CoreSku[];
  totalStock: number; // soma dos skus
}
