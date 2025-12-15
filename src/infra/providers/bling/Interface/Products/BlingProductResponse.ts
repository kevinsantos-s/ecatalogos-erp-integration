export interface BlingProductResponse {
  id: string;
  nome: string;
  codigo: string;

  descricao?: string;
  marca?: { id: string | null };
  categoria?: { id: string | null };
  genero?: { id: string | null };

  dataInclusao: string;
  dataAlteracao: string;
  dataExclusao?: string | null;

  tributacao?: {
    ipi?: string;
    st?: string;
  };

  composicao?: string;
  infoTecnica?: string;

  colecao?: string;
  grid?: { aberto: boolean };

  situacao?: "A" | "I"; // ativo / inativo

  cores?: Array<{
    id: string; // productColorErpId
  }>;
}
