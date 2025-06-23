
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import SuccessDialog from "./SuccessDialog";
import { supabase } from "@/integrations/supabase/client";
import { v4 as uuidv4 } from 'uuid';


// Perguntas para mapeamento
const questionList = [
  {
    text: "1) Como que a REFRAMAX quer ser percebida no mercado brasileiro, com relação as suas entregas de produtos e serviços?",
    options: [
      "Ser percebida como referência de cultura saudável, segura e sustentável na prestação de serviço no Brasil.",
      "Como empresa que tem o foco na produção com excelência.",
      "Ser percebido somente pela sua qualidade de produtos e serviços.",
      "Como uma empresa que paga um bom salário médio de mercado."
    ]
  },
  {
    text: "2) Qual o SLOGAN REFLEXIVO impulsionador como memória coletiva, para construirmos nosso ambiente de trabalho saudável, seguro e sustentável?",
    options: [
      "Cresça e apareça!",
      "Somos herói!",
      "Todos pra frente!",
      "Age que vem!"
    ]
  },
  {
    text: "3) De maneira bem simples o que é COMPORTAMENTO?",
    options: [
      "É a priorização das entregas e atividades produtivas.",
      "São ações e atitudes visíveis rotineiras impulsionadas pelas crenças, hábitos e valores.",
      "É um discurso filosófico sem conexão com a prática.",
      "Fazer acontecer a produção acima de tudo."
    ]
  },
  {
    text: "4) Quando dizemos que houve aprendizagem comportamental?",
    options: [
      "Quando se estuda todo dia.",
      "Quando tira dez na prova.",
      "Quando houve mudança de comportamento após novos conhecimentos.",
      "Quando faz improvisações todo o tempo no trabalho."
    ]
  },
  {
    text: "5) O que queremos dizer sobre a definição de COMPORTAMENTO DE OURO?",
    options: [
      "Fazer certo a coisa certa quando ninguém estiver olhando, isso agrega valor ao seu produto da mão-de-obra.",
      "Chamar a atenção de outro colega em condição de risco.",
      "Usar EPI corretamente.",
      "Elaboração de planejamento seguro."
    ]
  },
  {
    text: "6) Qual a melhor definição sobre PERCEPÇÃO DE RISCO?",
    options: [
      "Vê perigos na área de risco.",
      "Chamar atenção do colega de maneira.",
      "Manter guarda alta em todas as atividades de riscos existentes.",
      "É o processo de interpretação dos riscos existentes nas atividades captadas pela audição, paladar, tato, visão e olfato."
    ]
  },
  {
    text: "7) O que levamos em conta para avaliar e classificar se um risco é BAIXO, MÉDIO, ALTO e MUITO ALTO?",
    options: [
      "Só a Severidade do possível dano.",
      "Severidade e Probabilidade.",
      "Somente a Probabilidade de ocorrer um dano.",
      "Se ninguém foi treinado."
    ]
  },
  {
    text: "8) Cite alguns itens que nos levam a baixar a percepção do risco no ambiente de trabalho?",
    options: [
      "Trabalhando o tempo todo com muita pressa.",
      "Planejamento extenso e assertivo e recursos disponíveis.",
      "Cansaço físico e mental, pressa, preocupação acentuada, muito ruído na área, palavras ríspidas, arrogância.",
      "Tomar conta do outro, organograma detalhado e tempo adequado para execução da tarefa."
    ]
  },
  {
    text: "9) Usando a Hierarquia de Controle de Risco, temos que focar e priorizar as ações para:",
    options: [
      "Eliminação do risco.",
      "Fazer controle de engenharia.",
      "Controlar com EPI.",
      "Adotar medidas administrativas e procedimentos."
    ]
  },
  {
    text: "10) Refletido sobre o conceito do SORC (Estímulo – Organismo – Resposta – Consequência), qual o aprendizado muito importante que tiramos dele?",
    options: [
      "Todo o tempo somos estimulados a fazer de modo perigoso.",
      "Faz com que toleramos a convivência com os riscos.",
      "Vigiar seus hábitos de risco.",
      "Elogiar sem saber o COMO foi feito serviço, pode reforçar o comportamento de risco."
    ]
  }
];;

// Máscara para CPF
function cpfMask(value: string) {
  return value
    .replace(/\D/g, "")
    .replace(/^(\d{3})(\d)/, "$1.$2")
    .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})\.(\d{3})(\d)/, ".$1.$2-$3")
    .slice(0, 14);
}

// Função marcação das perguntas
const initialFormData = {
  nomeCompleto: "",
  cpf: "",
  ...Object.fromEntries(
    questionList.map((_, i) => [
      [`resposta_${i}`, ""],
      [`conviccao_${i}`, [50]],
    ]).flat()
  ),
};

// Função configura forms
const PreTestForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [formData, setFormData] = useState<Record<string, any>>(initialFormData);
  const [cpfTouched, setCpfTouched] = useState(false);

  const isOnlyDigits = (str: string) => /^\d+$/.test(str);

  // Validação do CPF em tempo real
  const cpfIsValid = isOnlyDigits(formData.cpf) && formData.cpf.length === 11;

  // 🚀 Simplifica validação 
  const validateForm = () => {
    if (!formData.nomeCompleto.trim() || !formData.cpf.trim()) {
      showError("Campo obrigatório não preenchido", "Nome completo e CPF são obrigatórios.");
      return false;
    }
    for (let i = 0; i < questionList.length; i++) {
      if (!formData[`resposta_${i}`]) {
        showError("Pergunta não respondida", `Responda à pergunta ${i + 1} para continuar.`);
        return false;
      }
    }
    if (!cpfIsValid) {
      showError("CPF Inválido", "Digite apenas 11 números no campo CPF.");
      return false;
    }
    return true;
  };

  // 🟡 Toast de erro
  const showError = (title: string, description: string) =>
    toast({ title, description, variant: "destructive" });

  // 🔁 Função para ENVIAR ao Supabase na nova tabela/colunas

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const agora = new Date();
      const carimbo = new Date(agora.getTime() - agora.getTimezoneOffset() * 60000)
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");

      const payload: Record<string, any> = {
        id_pergunta: uuidv4(),
        nome_completo: formData.nomeCompleto,
        cpf: formData.cpf,
        carimbo,
      };

      for (let i = 0; i < questionList.length; i++) {
        let resposta = formData[`resposta_${i}`] ?? "";
        resposta = cleanOptionPrefix(resposta);

        payload[`pergunta_${String(i + 1).padStart(2, "0")}`] = resposta;
        payload[`conviccao_${String(i + 1).padStart(2, "0")}`] = formData[`conviccao_${i}`][0];
      }

      const { error } = await (supabase as any)
        .from("pre_teste_prfc")
        .insert([payload]);

      if (error) {
        showError("Erro ao enviar", error?.message || "Tente novamente.");
        setIsSubmitting(false);
        return;
      }

      setSuccessOpen(true);
      setFormData({ ...initialFormData });
      setCurrentQuestion(0);
    } catch (err: any) {
      showError("Erro inesperado", err?.message || "Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Imagens e textos para convicção
  const getConvictionImage = (value: number) =>
    value <= 30
      ? "https://w1.pngwing.com/pngs/241/505/png-transparent-boy-football-soccer-soccer-ball-cartoon-soccer-kick-player-throwing-a-ball-playing-sports-football-player-thumbnail.png"
      : value >= 70
      ? "https://i.pinimg.com/474x/86/50/6a/86506a9a77cc49da93bfc2584edce5c7.jpg"
      : "https://e7.pngegg.com/pngimages/48/293/png-clipart-painted-3d-3d-3d-villain-doubt-cartoon-creative-3d-thumbnail.png";
  const getConvictionText = (value: number) =>
    value <= 30
      ? "Baixa convicção"
      : value >= 70
      ? "Estou convicto da resposta"
      : "Estou em dúvida";

  // Navegação
  const handleNext = () => setCurrentQuestion((prev) => prev + 1);
  const handlePrev = () => setCurrentQuestion((prev) => prev - 1);

  // Checa se resposta + convicção estão preenchidas
  const isQuestionAnswered = () => {
    const ans = formData[`resposta_${currentQuestion}`];
    const convArr = formData[`conviccao_${currentQuestion}`];
    return typeof ans === "string" && ans.length > 0 && typeof convArr?.[0] === "number";
  };

  // Renderiza Pergunta + Convicção
  const renderSingleQuestion = (question: typeof questionList[number], index: number) => {
    const convKey = `conviccao_${index}`;
    const convValue: number = formData[convKey]?.[0] ?? 50;
    return (
      <div className="space-y-4 p-4 bg-slate-700/30 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-400">
            Pergunta {index + 1} de {questionList.length}
          </span>
        </div>
        <h3 className="text-white font-medium text-base leading-relaxed">{question.text} *</h3>
        <RadioGroup
          value={formData[`resposta_${index}`]}
          onValueChange={(value) =>
            setFormData((prev) => ({ ...prev, [`resposta_${index}`]: value }))
          }
          className="space-y-3"
        >
          {question.options.map((option, optionIndex) => (
            <div key={optionIndex} className="flex items-start space-x-3">
              <RadioGroupItem
                value={option}
                id={`${index}-option-${optionIndex}`}
                className="border-white text-white mt-1 flex-shrink-0"
              />
              <Label
                htmlFor={`${index}-option-${optionIndex}`}
                className="text-gray-300 text-sm leading-relaxed cursor-pointer flex-1"
              >
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>
        {/* Convicção */}
        <div className="mt-6 p-4 bg-slate-600/30 rounded-lg">
          <Label className="text-gray-300 font-medium mb-3 block">Nível de Convicção *</Label>
          <div className="space-y-4">
            <Slider
              value={formData[convKey]}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, [convKey]: value }))
              }
              max={100}
              step={1}
              className="w-full"
            />
            <div className="flex items-center justify-center space-x-4">
              <img
                src={getConvictionImage(convValue)}
                alt="Conviction level"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-center">
                <div className="text-white font-bold text-lg">{convValue}%</div>
                <div className="text-gray-300 text-sm">{getConvictionText(convValue)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Antes de salvar no Supabase, filtra as opções para retirar o prefixo "A)", "B)", etc:
  const cleanOptionPrefix = (value: string) => {
    // Remove prefixos tipo "A)", "B)", "a)", "1)", "A.", "B.", etc. com espaço opcional
    return value.replace(/^[A-Da-d1-9][\)\.]\s?/, "");
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <SuccessDialog open={successOpen} onOpenChange={setSuccessOpen} />
      {/* Header */}
      <div className="text-center mb-8">
        <div className="mb-6">
      <img
        src="https://edhec.com.br/wp-content/webp-express/webp-images/uploads/2023/05/capa-PR.png.webp"
        alt="Logo"
        className="logo-highlight mx-auto h-20 md:h-24 mb-4"
      />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
          AVALIAÇÃO DE RETENÇÃO DE CONHECIMENTO
          <br />
          <span className="block text-lg md:text-2xl font-semibold text-yellow-400 mt-2">
            Percepção de Risco Foco Comportamental
          </span>
          <span className="block text-lg md:text-2xl font-semibold text-yellow-400 mt-2">
            Pré-Teste
          </span>

        </h1>
        <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
          Preencha seus dados abaixo e responda todas as perguntas obrigatórias.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Dados Pessoais */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-xl">Dados do Aluno</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="nomeCompleto" className="text-gray-300">
                Nome Completo *
              </Label>
              <Input
                id="nomeCompleto"
                value={formData.nomeCompleto}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, nomeCompleto: e.target.value }))
                }
                className="bg-slate-700 border-slate-600 text-white"
                required
              />
            </div>
            <div>
              <Label htmlFor="cpf" className="text-gray-300">
                CPF (somente números) *
              </Label>
              <Input
                id="cpf"
                value={formData.cpf}
                onChange={(e) => {
                  // Limita campo apenas a números
                  const raw = e.target.value.replace(/\D/g, "");
                  if (raw.length <= 11) {
                    setFormData((prev) => ({ ...prev, cpf: raw }));
                  }
                  if (!cpfTouched) setCpfTouched(true);
                }}
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Digite somente números. Ex: 12345678901"
                className={`bg-slate-700 border-slate-600 text-white ${cpfTouched && !cpfIsValid ? "border-red-500" : ""}`}
                maxLength={11}
                required
                onBlur={() => setCpfTouched(true)}
              />
              {cpfTouched && formData.cpf.length > 0 && (
                <div className={`mt-1 text-xs ${cpfIsValid ? "text-green-400" : "text-red-400"}`}>
                  {cpfIsValid ? "CPF válido." : "CPF deve conter exatamente 11 números."}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Uma pergunta por vez */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-xl">
              Seção de Avaliação - Pré Teste
            </CardTitle>
            <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 mt-4">
              <p className="text-yellow-400 font-medium">
                Ao responder, considere que cada questão possui uma única alternativa correta.
              </p>
            </div>
          </CardHeader>
          <CardContent>
            {renderSingleQuestion(questionList[currentQuestion], currentQuestion)}
            <div className="flex justify-between items-center mt-6 gap-2">
              <Button
                type="button"
                disabled={currentQuestion === 0}
                onClick={handlePrev}
                className="bg-slate-600 text-white hover:bg-slate-700 px-6"
              >
                Anterior
              </Button>
              {currentQuestion < questionList.length - 1 ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8"
                  disabled={!isQuestionAnswered()}
                >
                  Próxima
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting || !isQuestionAnswered()}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 flex items-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Enviar Formulário"
                  )}
                </Button>
              )}
            </div>
            <div className="text-xs text-gray-500 text-center mt-3">
              Você pode revisar as respostas voltando pelas perguntas
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default PreTestForm;


