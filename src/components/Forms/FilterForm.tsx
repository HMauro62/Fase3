import axios from 'axios';
import React, { useState } from 'react';
import type { Post } from '../../types/Post';

interface Filter {
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
        topic: ' ',
    });

    const data: Filter = {
        category: filters.category,
        topic: filters.topic
    }

    const SearchPostsByGet = async () => {
        try {
            setError("");

            let Uri = '';

            switch (filters.category) {
                case 'All':
                    Uri = 'http://localhost:3000/posts/';
                    break;

                default:
                    Uri = `http://localhost:3000/posts/category/${filters.category}/`;
                    break;
            };

            //alert('Uri ' + Uri + ' topic '+ filters.topic.toString().length);

            if (filters.topic.toString().length > 1) {
                    //setUri(prevUri => prevUri + 'topic/${filters.topic}/description/${filters.topic}');
                    Uri += `topic/${filters.topic}/description/${filters.topic}`;                       
            };

            //alert('Uri ' + Uri);

            const response = await axios.get<Post[]>(Uri);
            setDados(response.data);  // Atualiza state do componente pagePai
            setError(`Registros encontrados: ${response.data.length}`);

        } catch (err) {
            if (axios.isAxiosError(err)) {
                setError(err.message);
            } else {
                setError("Erro ao buscar os dados");
            }

        };
    }

    function btnSearch() {
        SearchPostsByGet();
        //{ SearchPostsByPost(data); }
    }

    function handleCategoryChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setFilters({ ...filters, category: event.target.value })
    }

    function handleTopicChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFilters({ ...filters, topic: event.target.value })
    }

    return (
        <div className="p-3">
            {/* 
        flex-col: empilha as divs (mobile)
        md:flex-row: coloca em linha (desktop/telas médias)
        justify-between: separa as extremidades no desktop
        gap-4: mantém espaçamento entre elas no mobile
      */}
            <form>
                <div className="w-full flex justify-center">
                    <div className="w-full max-w-6xl p-4 bg-blue-500 text-white items-center rounded-lg flex gap-4">
                        <fieldset >
                            <legend className="font-semibold">Categoria</legend>
                            <select id="category" className='text-black' onChange={handleCategoryChange} value={filters.category}>
                                <option value="All">Todas</option>
                                <option value="Português">Português</option>
                                <option value="Literatura">Literatura</option>                                
                                <option value="Redação">Redação</option>     
                                <option value="Matemática">Matemática</option>                                                           
                                <option value="História">História</option>
                                <option value="Geografia">Geografia</option>
                                <option value="Química">Química</option>
                                <option value="Física">Física</option>                                
                                <option value="Biologia">Biologia</option>  
                            </select>
                        </fieldset>
                            <fieldset className='md:w-96' style={{width: '80%'}}>
                            <legend>Palavras Chaves</legend>
                            <input type="string" id="topic" className=" text-black max-w-6xl w-full" onChange={handleTopicChange} value={filters.topic} />
                        </fieldset>
                                            <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded-lg
                                hover:bg-blue-900 transition-colors font-medium text-sm" onClick={() => btnSearch()}>
                        Pesquisar
                    </button>                  
                    </div>

                </div>
                <div className="flex md:flex-row justify-center items-center gap-4
                            bg-gray-50 p-6 py-2 md:px-96" style={{padding: '5px 180px'}}>
                    {error && <p className="text-blue-500"><b>{error}</b></p>}
                </div>
            </form>
        </div>
    );
}

export default FilterForm;