import { useState } from 'react';
import FilterForm from '../components/Forms/FilterForm';
import LstView from '../components/List/LstView';
import type { Post } from '../types/Post';
import { useLocation } from 'react-router-dom';
import type { DadosLogin } from '../types/DadosLogin';

function PagePai() {

    const [dados, setDados] = useState<Post[] | unknown>([]);
    const [dadosLogin, setDadosLogin] = useState<DadosLogin | unknown>(null)

    const location = useLocation();

    if (!dadosLogin && location.state)
      setDadosLogin(location.state)

    return (
        <div>
            <FilterForm setDados={setDados}  dadosLogin={location.state}  setDadosLogin={setDadosLogin} />
            <LstView dados={dados} dadosLogin={location.state} />
        </div>

    );
}

export default PagePai;