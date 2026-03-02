export default interface Post {
  userId?: number;
  id: number;
  category: string;
  tema: string;
  descricao: string;
  dtcriacao: Date;
  dtalteracao?: Date;
};