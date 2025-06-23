
-- Create Avaliacao_Retencao_Conhecimento table without the foreign key
CREATE TABLE public."Avaliacao_Retencao_Conhecimento" (
  id_avaliacao UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  cpf VARCHAR(11) NOT NULL,
  nome_completo TEXT NOT NULL,
  treinamento_id UUID,
  carimbo_data_hora TIMESTAMPTZ NOT NULL DEFAULT now(),
  data_treinamento DATE NOT NULL DEFAULT CURRENT_DATE,
  hora_treinamento TIME,
  "1) Como podemos usar a cultura MAKE dentro do ambiente de trabalho, para gerar conhecimento e domínio de processos seguros na prevenção de acidentes do Trabalho?" TEXT,
  "2) Qual a importância de entendermos o estudo sobre o choque de gerações para modelagem de comportamentos de risco dos empregados." TEXT,
  "3) Assinale a característica de uma LIDERANÇA GENUÍNA E VERDADEIRA, para prevenção da vida?" TEXT,
  "4) Como podemos definir andragogia associada na saúde e segurança do trabalho?" TEXT,
  "5) O que é comunicação segundo a visão de CHIAVENATO associada ao trabalho seguro?" TEXT,
  "6) Quais os passos para realizar DDS andragógico de qualidade e eficiente na prevenção da vida.?" TEXT,
  "7) No Band of Brothers qual a lição que tivemos da estratégia do Tenente Winters, associado a segurança do trabalho?" TEXT,
  "8) Qual o pilar que serve como base de sustentação da Liderança, conforme os 12 Pilares da Liderança do Brigadeiro William Cohen?" TEXT,
  "9) Qual a classificação dos 5 pilares da Inteligência Emocional associado a segurança do trabalho?" TEXT,
  "10) Descreva as etapas do Diálogo Comportamental, uma ferramenta que reeduca no comportamento seguro em campo." TEXT,
  conviccao_pergunta_01 SMALLINT,
  conviccao_pergunta_02 SMALLINT,
  conviccao_pergunta_03 SMALLINT,
  conviccao_pergunta_04 SMALLINT,
  conviccao_pergunta_05 SMALLINT,
  conviccao_pergunta_06 SMALLINT,
  conviccao_pergunta_07 SMALLINT,
  conviccao_pergunta_08 SMALLINT,
  conviccao_pergunta_09 SMALLINT,
  conviccao_pergunta_10 SMALLINT
);

-- Enable Row Level Security so you can later define precise access if needed
ALTER TABLE public."Avaliacao_Retencao_Conhecimento" ENABLE ROW LEVEL SECURITY;

