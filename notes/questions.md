# Dúvidas do Desenvolvimento - API B2B x Bling

Tive muitas dúvidas ao criar, qual seria a melhor estrutura

Bling  -> Mapper -> Core -> Mapper -> B2B (e vice-versa)

O que é o Core?

Como adaptar os dados do Bling para o B2B (e vice-versa)?

Como funcionam os tokens e autorização do BLING?

Como identificar um atendente, considerando que o bling só cria clientes a partir de contatos?

R: QUANDO FOR CRIAR ATENDENTE no BLING, usar os contatos, e passar o attendant id nas observaçõs

{
  "nome": "João Silva",
  "email": "joao@empresa.com",
  "observacoes": "ATTENDANT;ID=B2B-ATT-001"
}