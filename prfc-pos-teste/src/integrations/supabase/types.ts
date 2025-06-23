export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      cadastro_alunos: {
        Row: {
          carimbo: string | null
          cidade_residencia: string | null
          cidade_treinamento: string | null
          cpf: string | null
          data: string | null
          email: string | null
          empresa: string | null
          escolaridade: string | null
          estado_emocional: string | null
          estado_residencia: string | null
          estado_treinamento: string | null
          funcao: string | null
          id: string
          idade: number | null
          nome_completo: string | null
          telefone: string | null
          treinamento_id: number | null
          turno: string | null
        }
        Insert: {
          carimbo?: string | null
          cidade_residencia?: string | null
          cidade_treinamento?: string | null
          cpf?: string | null
          data?: string | null
          email?: string | null
          empresa?: string | null
          escolaridade?: string | null
          estado_emocional?: string | null
          estado_residencia?: string | null
          estado_treinamento?: string | null
          funcao?: string | null
          id: string
          idade?: number | null
          nome_completo?: string | null
          telefone?: string | null
          treinamento_id?: number | null
          turno?: string | null
        }
        Update: {
          carimbo?: string | null
          cidade_residencia?: string | null
          cidade_treinamento?: string | null
          cpf?: string | null
          data?: string | null
          email?: string | null
          empresa?: string | null
          escolaridade?: string | null
          estado_emocional?: string | null
          estado_residencia?: string | null
          estado_treinamento?: string | null
          funcao?: string | null
          id?: string
          idade?: number | null
          nome_completo?: string | null
          telefone?: string | null
          treinamento_id?: number | null
          turno?: string | null
        }
        Relationships: []
      }
      certificado_digital: {
        Row: {
          carga_horaria: string | null
          carimbo: string | null
          certificado_download_url: string | null
          certificado_url: string | null
          data_conclusao: string | null
          id_certificado: string
          local_treinamento: string | null
          municipio_uf: string | null
          nome_aluno: string | null
        }
        Insert: {
          carga_horaria?: string | null
          carimbo?: string | null
          certificado_download_url?: string | null
          certificado_url?: string | null
          data_conclusao?: string | null
          id_certificado: string
          local_treinamento?: string | null
          municipio_uf?: string | null
          nome_aluno?: string | null
        }
        Update: {
          carga_horaria?: string | null
          carimbo?: string | null
          certificado_download_url?: string | null
          certificado_url?: string | null
          data_conclusao?: string | null
          id_certificado?: string
          local_treinamento?: string | null
          municipio_uf?: string | null
          nome_aluno?: string | null
        }
        Relationships: []
      }
      gabarito: {
        Row: {
          pergunta: string | null
          pergunta_id: string
          resposta: string | null
        }
        Insert: {
          pergunta?: string | null
          pergunta_id: string
          resposta?: string | null
        }
        Update: {
          pergunta?: string | null
          pergunta_id?: string
          resposta?: string | null
        }
        Relationships: []
      }
      pesquisa_satisfacao: {
        Row: {
          avaliacao_geral: string | null
          banheiros: string | null
          carga_horaria: string | null
          carimbo: string | null
          clareza_exposicao: string | null
          climatizacao: string | null
          coffee_break: string | null
          comentario_final: string | null
          confianca_credibilidade: string | null
          dominio_conteudo: string | null
          equipamentos: string | null
          hall_atendimento: string | null
          id_pesquisa: string
          interesse_assunto: string | null
          profundidade_tema: string | null
          recepcao: string | null
          relacao_atividade: string | null
          salas: string | null
          treinamento_id: number | null
          uso_tempo: string | null
        }
        Insert: {
          avaliacao_geral?: string | null
          banheiros?: string | null
          carga_horaria?: string | null
          carimbo?: string | null
          clareza_exposicao?: string | null
          climatizacao?: string | null
          coffee_break?: string | null
          comentario_final?: string | null
          confianca_credibilidade?: string | null
          dominio_conteudo?: string | null
          equipamentos?: string | null
          hall_atendimento?: string | null
          id_pesquisa: string
          interesse_assunto?: string | null
          profundidade_tema?: string | null
          recepcao?: string | null
          relacao_atividade?: string | null
          salas?: string | null
          treinamento_id?: number | null
          uso_tempo?: string | null
        }
        Update: {
          avaliacao_geral?: string | null
          banheiros?: string | null
          carga_horaria?: string | null
          carimbo?: string | null
          clareza_exposicao?: string | null
          climatizacao?: string | null
          coffee_break?: string | null
          comentario_final?: string | null
          confianca_credibilidade?: string | null
          dominio_conteudo?: string | null
          equipamentos?: string | null
          hall_atendimento?: string | null
          id_pesquisa?: string
          interesse_assunto?: string | null
          profundidade_tema?: string | null
          recepcao?: string | null
          relacao_atividade?: string | null
          salas?: string | null
          treinamento_id?: number | null
          uso_tempo?: string | null
        }
        Relationships: []
      }
      pos_teste_prfc: {
        Row: {
          carimbo: string | null
          cidade_treinamento: string | null
          cpf: string | null
          estado_treinamento: string | null
          id_pergunta: string
          nome_completo: string | null
          pergunta_01: string | null
          pergunta_02: string | null
          pergunta_03: string | null
          pergunta_04: string | null
          pergunta_05: string | null
          pergunta_06: string | null
          pergunta_07: string | null
          pergunta_08: string | null
          pergunta_09: string | null
          pergunta_10: string | null
          treinamento_id: number | null
        }
        Insert: {
          carimbo?: string | null
          cidade_treinamento?: string | null
          cpf?: string | null
          estado_treinamento?: string | null
          id_pergunta: string
          nome_completo?: string | null
          pergunta_01?: string | null
          pergunta_02?: string | null
          pergunta_03?: string | null
          pergunta_04?: string | null
          pergunta_05?: string | null
          pergunta_06?: string | null
          pergunta_07?: string | null
          pergunta_08?: string | null
          pergunta_09?: string | null
          pergunta_10?: string | null
          treinamento_id?: number | null
        }
        Update: {
          carimbo?: string | null
          cidade_treinamento?: string | null
          cpf?: string | null
          estado_treinamento?: string | null
          id_pergunta?: string
          nome_completo?: string | null
          pergunta_01?: string | null
          pergunta_02?: string | null
          pergunta_03?: string | null
          pergunta_04?: string | null
          pergunta_05?: string | null
          pergunta_06?: string | null
          pergunta_07?: string | null
          pergunta_08?: string | null
          pergunta_09?: string | null
          pergunta_10?: string | null
          treinamento_id?: number | null
        }
        Relationships: []
      }
      pre_teste_prfc: {
        Row: {
          carimbo: string | null
          cidade_treinamento: string | null
          conviccao_01: string | null
          conviccao_02: string | null
          conviccao_03: string | null
          conviccao_04: string | null
          conviccao_05: string | null
          conviccao_06: string | null
          conviccao_07: string | null
          conviccao_08: string | null
          conviccao_09: string | null
          conviccao_10: string | null
          cpf: string | null
          estado_treinamento: string | null
          id_pergunta: string
          nome_completo: string | null
          pergunta_01: string | null
          pergunta_02: string | null
          pergunta_03: string | null
          pergunta_04: string | null
          pergunta_05: string | null
          pergunta_06: string | null
          pergunta_07: string | null
          pergunta_08: string | null
          pergunta_09: string | null
          pergunta_10: string | null
          treinamento_id: number | null
        }
        Insert: {
          carimbo?: string | null
          cidade_treinamento?: string | null
          conviccao_01?: string | null
          conviccao_02?: string | null
          conviccao_03?: string | null
          conviccao_04?: string | null
          conviccao_05?: string | null
          conviccao_06?: string | null
          conviccao_07?: string | null
          conviccao_08?: string | null
          conviccao_09?: string | null
          conviccao_10?: string | null
          cpf?: string | null
          estado_treinamento?: string | null
          id_pergunta: string
          nome_completo?: string | null
          pergunta_01?: string | null
          pergunta_02?: string | null
          pergunta_03?: string | null
          pergunta_04?: string | null
          pergunta_05?: string | null
          pergunta_06?: string | null
          pergunta_07?: string | null
          pergunta_08?: string | null
          pergunta_09?: string | null
          pergunta_10?: string | null
          treinamento_id?: number | null
        }
        Update: {
          carimbo?: string | null
          cidade_treinamento?: string | null
          conviccao_01?: string | null
          conviccao_02?: string | null
          conviccao_03?: string | null
          conviccao_04?: string | null
          conviccao_05?: string | null
          conviccao_06?: string | null
          conviccao_07?: string | null
          conviccao_08?: string | null
          conviccao_09?: string | null
          conviccao_10?: string | null
          cpf?: string | null
          estado_treinamento?: string | null
          id_pergunta?: string
          nome_completo?: string | null
          pergunta_01?: string | null
          pergunta_02?: string | null
          pergunta_03?: string | null
          pergunta_04?: string | null
          pergunta_05?: string | null
          pergunta_06?: string | null
          pergunta_07?: string | null
          pergunta_08?: string | null
          pergunta_09?: string | null
          pergunta_10?: string | null
          treinamento_id?: number | null
        }
        Relationships: []
      }
      treinamentos: {
        Row: {
          bi_att: boolean | null
          cidade: string | null
          data: string | null
          equipe: string | null
          estado: string | null
          observacao: string | null
          treinamento_id: number
          turma: string | null
          turno: string | null
        }
        Insert: {
          bi_att?: boolean | null
          cidade?: string | null
          data?: string | null
          equipe?: string | null
          estado?: string | null
          observacao?: string | null
          treinamento_id?: number
          turma?: string | null
          turno?: string | null
        }
        Update: {
          bi_att?: boolean | null
          cidade?: string | null
          data?: string | null
          equipe?: string | null
          estado?: string | null
          observacao?: string | null
          treinamento_id?: number
          turma?: string | null
          turno?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
