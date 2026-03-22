import { useState } from 'react';
import FilterForm from '../components/Forms/FilterForm';
import LstView from '../components/List/LstView';
import type { Post } from '../types/Post';

function PagePai() {

    const [dados, setDados] = useState<Post[]>([]);

    const userStorage = localStorage.getItem("usuarioLogado");
    const user = userStorage ? JSON.parse(userStorage) : null;

    return (
        <div>
            <FilterForm setDados={setDados}  dadosLogin={user} />
            <LstView dados={dados} dadosLogin={user} />
        </div>

    );
}

export default PagePai;