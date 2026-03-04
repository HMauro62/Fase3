import { ArrowUp , ArrowDown  } from "lucide-react";
import { useState } from 'react';

interface Post {
    userId?: number;
    id: number;
    category: string;
    topic: string;
    description: string;
    body: string;
}

interface ListaProps {
    dados: Post[];
}

function LstView({ dados }: ListaProps) {

    const [linhaOculta, setLinhaOculta] = useState<number | null>(null);

    return (

        <div className="w-full flex justify-center">
            <div className="w-full max-w-6xl p-4">

                {dados.map((item) => (

                    <div className="grid grid-rows-1 gap-4">
                        {/* Linha */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-0 border border-black">

                            {/* categorias */}
                            <div className={`bg-blue-500 text-white p-1 `}>Categoria: <b>{item.category}</b></div>
                            <div className="bg-white text-black p-4">Tema: <b>{item.topic}</b></div>
                            <div key={item.id} className={`bg-gray-200 text-black p-4 
                            ${linhaOculta === item.id ? 'block' : 'hidden'  }`}>
                                {item.description}
                            </div>

                            {/* view */}
                            <div className="p-4 px-2 flex justify-end gap-2">
                                <ArrowDown color="#03541b"  onClick={() => setLinhaOculta(item.id)}/> 
                                <ArrowUp color="#03541b" onClick={() => setLinhaOculta(null)} />    
                            </div>                            

                            {/* botões edição - inicial hidden */}
                            <div className="hidden bg-white text-black p-4">
                                <div className="bg-white-300 text-black p-4">
                                    <button className="px-2 py-2 border bg-slate-400 rounded hover:bg-red-300 transition">
                                        Voltar
                                    </button>

                                    <button className=" px-2 py-2 bg-blue-600 text-white rounded hover:bg-blue-900 transition">
                                        Salvar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LstView;