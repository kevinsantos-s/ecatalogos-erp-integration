export interface BlingContact {
  nome: string;
  codigo?: string;
  situacao?: string;
  numeroDocumento?: string;
  telefone?: string;
  celular?: string;
  fantasia?: string;
  tipo?: "F" | "J"; // pessoa física ou jurídica
  indicadorIe?: number;
  ie?: string;
  rg?: string;
  inscricaoMunicipal?: string;
  orgaoEmissor?: string;
  email?: string;
  emailNotaFiscal?: string;

  endereco?: {
    geral?: BlingAddress;
    cobranca?: BlingAddress;
  };

  vendedor?: {
    id: number;
  };

  dadosAdicionais?: {
    dataNascimento?: string;
    sexo?: string;
    naturalidade?: string;
  };

  financeiro?: {
    limiteCredito?: number;
    condicaoPagamento?: string;
    categoria?: {
      id: number;
    };
  };

  pais?: {
    nome: string;
  };

  tiposContato?: Array<{
    id?: number;
    descricao?: string; // Cliente, Fornecedor, etc
  }>;

  pessoasContato?: Array<{
    id?: number;
    descricao?: string;
  }>;
}

export interface BlingAddress {
  endereco: string;
  cep: string;
  bairro: string;
  municipio: string;
  uf: string;
  numero: string;
  complemento?: string;
}
