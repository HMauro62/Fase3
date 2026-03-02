import { useState } from 'react';
import FilterForm from '../components/Forms/FilterForm';
import LstView from '../components/List/LstView';


interface Post {
  userId?: number;
  id: number;
  category: string;
  tema: string;
  descricao: string;
  dtcriacao: Date;
  dtalteracao?: Date;
}

function PagePai() {

    const [dados, setDados] = useState<Post[]>([]);

    return (
        <div>
            <FilterForm setDados={setDados} />
            <LstView dados={dados} />
        </div>

    );
}

export default PagePai;