import { ArrowDownUp, Filter } from "lucide-react";
import { useState } from 'react';

function LstView() {
    const [isEdicao, setIsEdicao] = useState<boolean>(false);
    const [isReader, setIsReader] = useState<boolean>(false);
    
    return (
 
        <div className="w-full flex justify-center">
            <div className="w-full max-w-6xl p-4">
                <div className="grid grid-rows-2 gap-4">
                    {/* Linha */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-0 border border-black">

                        {/* categorias */ }
                        <div className={`bg-blue-500 text-white p-1 `}>Categoria:</div>
                        <div className="bg-white text-black p-4">Tema:</div>
                        <div className={`bg-gray-200 text-black p-4 ${!isReader ? 'hidden' : ''}`}>Descrição</div>

                        {/* view */}
                        <div className="p-4">
                            <ArrowDownUp  color="#03541b" onClick={() => setIsReader(!isReader)}/>
                        </div>
                        
                        {/* botões edição - inicial hidden */}
                        <div className={`${!isEdicao ? 'hidden' : ''} bg-white text-black p-4`}>
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
            </div>



        </div>
    );
}

export default LstView;