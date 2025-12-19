export interface BlingProductStorePost {
  codigo: string; // post para vincular produto
  preco: number;
  precoPromocional?: number;

  produto: {
    id: number;
  };

  loja: {
    id: number;
  };

  fornecedorLoja?: {
    id: number;
  };

  marcaLoja?: {
    id: number;
  };

  categoriasProdutos?: {
    id: number;
  }[];
}
