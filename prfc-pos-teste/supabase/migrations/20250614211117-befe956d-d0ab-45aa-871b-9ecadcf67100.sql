
-- Criação da tabela respostas_pre_teste para salvar respostas dos alunos no pré-teste

CREATE TABLE public.respostas_pre_teste (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  carimbo_data_hora TIMESTAMP WITH TIME ZONE DEFAULT now(),
  nome_completo TEXT NOT NULL,
  cpf TEXT NOT NULL,
  pergunta01 TEXT NOT NULL,
  conviccao01 INTEGER NOT NULL,
  pergunta02 TEXT NOT NULL,
  conviccao02 INTEGER NOT NULL,
  pergunta03 TEXT NOT NULL,
  conviccao03 INTEGER NOT NULL,
  pergunta04 TEXT NOT NULL,
  conviccao04 INTEGER NOT NULL,
  pergunta05 TEXT NOT NULL,
  conviccao05 INTEGER NOT NULL,
  pergunta06 TEXT NOT NULL,
  conviccao06 INTEGER NOT NULL,
  pergunta07 TEXT NOT NULL,
  conviccao07 INTEGER NOT NULL,
  pergunta08 TEXT NOT NULL,
  conviccao08 INTEGER NOT NULL,
  pergunta09 TEXT NOT NULL,
  conviccao09 INTEGER NOT NULL,
  pergunta10 TEXT NOT NULL,
  conviccao10 INTEGER NOT NULL
);
