import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";

type SuccessDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function SuccessDialog({ open, onOpenChange }: SuccessDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-slate-800/90 border-slate-700 max-w-md p-6 rounded-xl flex flex-col items-center text-center">
        <img
          src="https://edhec.com.br/wp-content/webp-express/webp-images/uploads/2023/05/capa-PR.png.webp"
          alt="Pós Teste Logo"
          className="logo-highlight mx-auto h-20 md:h-24 mb-2"
        />
        <div className="flex items-center justify-center gap-2">
          <CheckCircle className="text-yellow-400 w-6 h-6 animate-bounce" />
          <h2 className="text-2xl font-bold text-yellow-400 mt-2 mb-2">
            Formulário Enviado!
          </h2>
        </div>
        <p className="text-white text-xl font-bold mb-2">
          Pós Teste
        </p>
        <p className="text-gray-300 mb-4">
          Seus dados foram salvos com sucesso.<br />
          Obrigado por participar.<br />
          Você pode fechar esta mensagem ou sair da página com segurança.
        </p>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-2 rounded"
          onClick={() => onOpenChange(false)}
        >
          Fechar
        </button>
      </DialogContent>
    </Dialog>
  );
}
