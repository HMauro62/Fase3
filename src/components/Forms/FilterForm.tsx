import axios from 'axios';
import React, { useState } from 'react';
import type { Post } from '../../types/Post';
import type { DadosLogin } from "../../types/DadosLogin";
import { Search  } from 'lucide-react';


interface Filter {
    category: string;
    topic: string;
};

interface FilterProps {
    setDados: React.Dispatch<React.SetStateAction<Post[]>>;
    dadosLogin: DadosLogin;
}


const FilterForm: React.FC<FilterProps> = ({setDados , dadosLogin}) => {

    const [error, setError] = useState<string>('');

    const [filters, setFilters] = React.useState<Filter>({
        category: 'All',
        topic: ' ',
    });

    const SearchPostsByGet = async () => {
        try {
            setError("");

            let Uri = '';

            console.log('logado? ' + !!dadosLogin?.id);

             if (!!dadosLogin?.id ) {

                  switch (filters.category) {
                        case 'All':
                            Uri = `http://localhost:3000/posts/prof/${dadosLogin.id}`;
                            break;

                        default:
                            Uri = `http://localhost:3000/posts/prof/${dadosLogin.id}/category/${filters.category}/`;
                            break;
                    };           
                    
                    if (filters.topic.toString().length > 1) {
                                //setUri(prevUri => prevUri + 'topic/${filters.topic}/description/${filters.topic}');
                                Uri += `topic/${filters.topic}/description/${filters.topic}`;                       
                        };
                    
            } else  
                {

                    //console.log(filters.category);

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
                }           

            console.log('Uri ' + Uri);

            const response = await axios.get<Post[]>(Uri);
            setDados(response.data);  // Atualiza state do componente pagePai
            setError(` ${response.data.length}`);
          
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
                            <legend>Palavra</legend>
                            <input type="string" id="topic" className=" text-black max-w-6xl w-full" onChange={handleTopicChange} value={filters.topic} />
                        </fieldset>
                        <button type="button" className= 'font-medium text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors'  
                         onClick={() => btnSearch()}>
                        <Search className="size-6" /> 
                        </button>
                    </div>

                </div>
                <div className="flex md:flex-row justify-center items-center gap-4
                            bg-gray-50 p-6 py-2 md:px-96" style={{padding: '5px 180px'}}>
                    {error && <p className="text-blue-500 text-xs"><b>Retorno:{error} itens</b></p>}
                </div>
            </form>
        </div>
    );
}

export default FilterForm;