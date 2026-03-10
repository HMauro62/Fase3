import { useState } from 'react';
import FilterForm from '../components/Forms/FilterForm';
import LstView from '../components/List/LstView';
import type { Post } from '../types/Post';

function PagePai() {

    const [dados, setDados] = useState<Post[] | unknown>([]);

    return (
        <div>
            <FilterForm setDados={setDados} />
            <LstView dados={dados} />
        </div>

    );
}

export default PagePai;