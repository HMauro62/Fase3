export interface ipostTema {
  userId?: number;
  id: number;
  category: string;
  tema: string;
  descricao: string;
  dtcriacao: Date;
  dtalteracao?: Date;
}