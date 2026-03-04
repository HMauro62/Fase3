import { useState } from 'react';
import FilterForm from '../components/Forms/FilterForm';
import LstView from '../components/List/LstView';


interface Post {
    userId?: number;
    id: number;
    category: string;
    topic: string;
    description: string;
}

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