import { ArrowUp , ArrowDown, Link, DoorClosedLocked, PencilLine, Pencil, Trash  } from "lucide-react";
import { useEffect, useState } from 'react';
import type { Post } from '../../types/Post'
import axios from "axios";
import FormInsertUpdate from "../Forms/FormInsertUpdate";
import React from "react";


interface ListaProps {
    dados: Post[];
}

async function btnExcluir(id: string) {

    const result = window.confirm("Você tem certeza que deseja excluir ?");
    
    if (result) {
        let Uri = `http://localhost:3000/posts/` + id;

        const response = await axios.delete(Uri);
    }

}

function LstView({ dados }: ListaProps) {

    const [linhaOculta, setLinhaOculta] = useState<string | null>(null);

    const [exibirPainelInsertUpdate, setExibirPainelInsertUpdate] = useState(false);
    
    const [postAtual, setPostAtual] = useState<Post>({
        userId: '',
        category: '',
        topic: '',
        description: '',
        id: ''
      });

    const handleNotify = async (filhoDiz: React.SetStateAction<string>) => {     

      //const response = await axios.get<Post[]>('http://localhost:3000/posts/');

      //setExibirPainelInsertUpdate(false);

      window.location.reload();

    }; 

    const containerStyle = {
      display: 'flex',
      justifyContent: 'space-between', // Empurra o texto para esquerda e ícones para direita
      alignItems: 'center',            // Alinha verticalmente no centro
      padding: '10px',
      borderBottom: '1px solid #ccc',
      width: '100%',
      height: '40px'
    };

    const iconWrapperStyle = {
      display: 'flex',
      gap: '10px' // Espaçamento entre os dois ícones
    };

    return (

        <div className="w-full flex justify-center">
            <div className="w-full max-w-6xl p-4"> 

                <div style={iconWrapperStyle}>
                    

                        <button 
                        type="submit" 
                        style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' }} 
                        onClick={() => {setExibirPainelInsertUpdate(true); 
                            setPostAtual({
                                userId: '',
                                category: '',
                                topic: '',
                                description: '',
                                id: ''                    
                            })}}
                        hidden={exibirPainelInsertUpdate}
                        >
                            Novo
                        </button>      

                        <button 
                        type="submit" 
                        style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' }} 
                        onClick={() => {setExibirPainelInsertUpdate(false)}}
                        hidden={!exibirPainelInsertUpdate}
                        >
                            Voltar
                        </button>  

                </div>
               <div className="p-3"></div>     

            {exibirPainelInsertUpdate && 
              <FormInsertUpdate initialData={postAtual} onGravar={handleNotify}  />
            }              
                {!exibirPainelInsertUpdate && dados.map((item) => (

                    <div className="grid grid-rows-1 gap-4">
                        {/* Linha */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-0 border border-black">

                            {/* categorias */}
                            <div className={`bg-blue-500 text-white`} style={containerStyle}>
                                <div className={`bg-blue-500 text-white p-1`}><b>{item.topic}</b></div>
                                      <div style={iconWrapperStyle}>
                                <Pencil color="white" onClick={() => {setExibirPainelInsertUpdate(true); setPostAtual(item)}}/>                                
                                <Trash color="white"  onClick={() => btnExcluir(item.id)}/>  
                                    </div>
                            </div>
                            <div style={containerStyle}>                            
                              <div className="bg-white text-black p-1" >Categoria: <b>{item.category}</b></div>
                              <div style={iconWrapperStyle}>
                                <ArrowDown color="#03541b"  onClick={() => setLinhaOculta(item.id)}/> 
                                <ArrowUp color="#03541b" onClick={() => setLinhaOculta(null)} />  
                              </div>  
                            </div>
                            <div key={item.id} className={`bg-gray-200 text-black p-4 
                            ${linhaOculta === item.id ? 'block' : 'hidden'  }`}>
                                {item.description}
                            </div>                           
                        </div>
                        <div className="p-1"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LstView;