export interface BlingChannelResponse {
  data: Array<{
    id: number;
    descricao: string;
    tipo: string;
    situacao: number;
  }>;
}