import axios from 'axios';
import React, { useState } from 'react';

interface Post {
    userId?: number;
    id: number;
    category: string;
    topic: string;
    description: string;
    body: string;
}

type Filter = {
    category: string;
    topic: string;
};

interface FilterProps {
    setDados: React.Dispatch<React.SetStateAction<Post[]>>;
}

const FilterForm: React.FC<FilterProps> = ({ setDados }) => {

    const [error, setError] = useState<string>('');

    const [filters, setFilters] = React.useState<Filter>({
        category: 'All',
        topic: '',
    });

    var url = '';
    var nbody = '';

    //alert('categoria ' + filters.category + ' tema ' + filters.topic);

    switch (filters.category) {
        case 'All':
            url = 'http://localhost:3000/posts';
            break;
        default:
            url = `http://localhost:3000/posts/category/${filters.category}`;
            break;
    }

    switch (filters.topic) {
        case '':
            break;
        default:
            url = `http://localhost:3000/posts?search/${filters.topic}`;
            nbody = `{"topic": "${filters.topic}"}`;
            break;
    }

    //alert('URL: ' + url);

    const btnSearch = async () => {
        try {
            setError("");

            const response = await axios.get<Post[]>(url);            
            setDados(response.data);  // Atualiza state do componente pagePai
            setError(`Registros encontrados: ${response.data.length}`);

        } catch (err) {
            if (axios.isAxiosError(err)) {
                setError(err.message);
                alert(`Erro: ${err.message}`);
            } else {
                setError("Erro ao buscar os dados");
                alert("Erro ao buscar os dados");
            }

        };

    }


    function handleCategoryChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setFilters({ ...filters, category: event.target.value })
    }

    function handleTopicChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFilters({ ...filters, topic: event.target.value })
    }

    return (
        <div className="p-4">
            {/* 
        flex-col: empilha as divs (mobile)
        md:flex-row: coloca em linha (desktop/telas médias)
        justify-between: separa as extremidades no desktop
        gap-4: mantém espaçamento entre elas no mobile
      */}
            <form>
                <div className="flex flex-col md:flex-row justify-between items-center gap-4
                            bg-gray-50 p-6 py-2 md:px-96">
                    <div className="w-full md:w-auto p-4 bg-blue-500 text-white rounded-lg">
                        <fieldset >
                            <legend className="font-semibold">Categoria</legend>
                            <select id="category" className='text-black' onChange={handleCategoryChange} value={filters.category}>
                                <option value="All">Todas</option>
                                <option value="Matemática">Matemática</option>
                                <option value="Português">Português</option>
                                <option value="História">História</option>
                            </select>
                        </fieldset>
                    </div>

                    <div className="w-full md:w-auto p-4 bg-blue-500 text-white rounded-lg">
                        <fieldset className='md:w-96'>
                            <legend>Tema</legend>
                            <input type="string" id="topic" className=" text-black w-full" onChange={handleTopicChange} value={filters.topic} />
                        </fieldset>
                    </div>
                    <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded-lg
                                hover:bg-blue-900 transition-colors font-medium text-sm" onClick={() => btnSearch()}>
                        Pesquisar
                    </button>

                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-4
                            bg-gray-50 p-6 py-2 md:px-96">
                    {error && <p className="text-blue-500"><b>{error}</b></p>}  
                </div>
            </form>
        </div>
    );
}

export default FilterForm;