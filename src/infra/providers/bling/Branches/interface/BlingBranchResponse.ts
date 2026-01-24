export interface BlingBranchResponse {
  data: {
    id: number;
    descricao: string;
    tipo: string;
    situacao: number;
    filiais: BlingBranch[];
  };
}

export interface BlingBranch {
  cnpj: string;
  idUnidadeNegocio: number;
  unidadeNegocio: string;
  deposito: {
    id: number;
  };
  padrao: boolean;
}
