import { ArrowUp , ArrowDown, Link, DoorClosedLocked, PencilLine, Pencil, Trash  } from "lucide-react";
import { useEffect, useState } from 'react';
import type { Post } from '../../types/Post'
import axios from "axios";
import FormInsertUpdate from "../Forms/FormInsertUpdate";
import React from "react";
import type { DadosLogin } from "../../types/DadosLogin";


interface ListaProps {
    dados: Post[];
    dadosLogin: DadosLogin;
}

async function btnExcluir(id: string) {

    const result = window.confirm("Você tem certeza que deseja excluir ?");
    
    if (result) {
        let Uri = `http://localhost:3000/posts/` + id;

        const response = await axios.delete(Uri);

        if (response.status === 200)
            window.location.reload();
    }

}

function LstView({ dados, dadosLogin }: ListaProps) {

    const [linhaOculta, setLinhaOculta] = useState<string | null>(null);

    const [exibirPainelInsertUpdate, setExibirPainelInsertUpdate] = useState(false);
    
    const [postAtual, setPostAtual] = useState<Post>({
        user_id: '',
        category: '',
        topic: '',
        description: '',
        id: ''
      });

    const handleNotify = async (filhoDiz: React.SetStateAction<string>) => {     

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
                                user_id: '',
                                category: '',
                                topic: '',
                                description: '',
                                id: ''                    
                            })}}
                        hidden={exibirPainelInsertUpdate || !dadosLogin}
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
              <FormInsertUpdate initialData={postAtual} onGravar={handleNotify} userId={dadosLogin.id} />
            }              
                {!exibirPainelInsertUpdate && dados.map((item) => (

                    <div className="grid grid-rows-1 gap-4">
                        {/* Linha */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-0 border border-black">

                            {/* categorias */}
                            <div className={`bg-blue-500 text-white`} style={containerStyle}>
                                <div className={`bg-blue-500 text-white p-1`}><b>{item.topic}</b></div>
                                      <div style={iconWrapperStyle}>
                                {dadosLogin && (dadosLogin.id === item.user_id) && <Pencil color="white" onClick={() => {setExibirPainelInsertUpdate(true); setPostAtual(item)}}/> }                               
                                {dadosLogin && (dadosLogin.id === item.user_id) && <Trash color="white"  onClick={() => btnExcluir(item.id)}/>  }
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