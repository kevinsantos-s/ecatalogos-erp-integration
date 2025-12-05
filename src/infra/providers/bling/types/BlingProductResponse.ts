export interface BlingCategory {
  id: number;
}

export interface BlingStock {
  minimo?: number; 
  maximo?: number;  
  crossdocking?: number; // 0 pronta entrega? vou ver depois kk fds 
}

export interface BlingDimensions {
  largura: number;  
  altura: number;  
  profundidade: number;   
  unidadeMedida: number;  
}

export interface BlingTributacao {
  ipi?: number;
  ncm?: string;  
  cest?: string; 
}

export interface BlingVariacao {
  id: number;    // equivalente aos SKU do b2b 
  nome: string;
  codigo: string;
  preco: number; //não vou usar por agora pq o b2b so tem um preço p/produto
  estoque?: BlingStock;
  variacao?: {
    nome: string; // ex: "Tamanho:G;Cor:Verde"
  };
}

export interface BlingProduct {
  id: number;
  nome: string;
  codigo: string;
  preco: number;
  tipo?: string;
  situacao: "A" | "I"; // ou string // vou tentar converter para productIsVisible (A = ativo, I = inativo)
  formato?: string;
  descricaoCurta?: string;
  descricaoComplementar?: string;

  categoria?: BlingCategory;
  estoque?: BlingStock;
  dimensoes?: BlingDimensions;
  tributacao?: BlingTributacao;
  midia?: BlingMedia;

  variacoes?: BlingVariacao[];
}

export interface BlingMediaImage {
  link: string; // link da imagem no Bling
}

export interface BlingMedia {
  video?: {
    url: string;
  };
  imagens?: {
    imagensURL: BlingMediaImage[];
  };
}
