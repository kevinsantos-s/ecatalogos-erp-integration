export interface BlingProductVariationPost {
  produtoPai: { id: number };
  atributos: {
    nome: string;
    opcoes: string[];
  }[];
}
