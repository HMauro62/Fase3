import React from 'react';

interface Post {
  userId?: number;
  id: number;
  category: string;
  tema: string;
  descricao: string;
  dtcriacao: Date;
  dtalteracao?: Date;
}


interface FilterProps {
    setDados: React.Dispatch<React.SetStateAction<Post[]>>;
}

const FilterForm: React.FC<FilterProps> = ({ setDados }) => {

    async function btnSearch(userId: number): Promise<void> {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        );

        const data: Post[] = await response.json();

        setDados(data); // Atualiza state do componente pagePai
    }

    type Filter = {
        category: string;
        tema: string;
    };

    const [filters, setFilters] = React.useState<Filter>({
        category: 'All',
        tema: '',
    });

    function handleCategoryChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setFilters({ ...filters, category: event.target.value })
    }

    function handleTemaChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFilters({ ...filters, tema: event.target.value })
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
                                <option value="Matematica">Matemática</option>
                                <option value="Portugues">Português</option>
                                <option value="Historia">História</option>
                            </select>
                        </fieldset>
                    </div>

                    <div className="w-full md:w-auto p-4 bg-blue-500 text-white rounded-lg">
                        <fieldset className='md:w-96'>
                            <legend>Tema</legend>
                            <input type="string" id="tema" className=" text-black w-full" onChange={handleTemaChange} value={filters.tema} />
                        </fieldset>
                    </div>
                    <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded-lg
                                hover:bg-blue-900 transition-colors font-medium text-sm" onClick={() => btnSearch(10)}>
                        Pesquisar
                    </button>

                </div>
            </form>
        </div>
    );
}

export default FilterForm;