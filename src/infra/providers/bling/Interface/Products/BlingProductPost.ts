export interface BlingProductPost {
  nome: string;
  codigo: string;
  preco: number;
  situacao: "A" | "I";

  categoria?: { id: number };
  estoque?: {
    minimo?: number;
    maximo?: number;
    crossdocking?: number;
  };

  dimensoes?: {
    largura: number;
    altura: number;
    profundidade: number;
    unidadeMedida: number;
  };

  tributacao?: {
    ipi?: number;
    ncm?: string;
    cest?: string;
  };

  midia?: {
    imagens?: {
      imagensURL: { link: string }[];
    };
  };
}
