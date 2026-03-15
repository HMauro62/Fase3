import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function LoginPage() {

  const navigate = useNavigate();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

async function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();

    let Uri = 'http://localhost:3000/users/loginUsuario';

    const dadosLogin = {
      username: username,
      password: password
    }

    if (username === '' ) {
      alert('Forneça seu apelido e senha.');
      return false;
    } 

    const response = await axios.post(Uri, dadosLogin);

    console.log(response);

    if (response.status == 200)
      navigate("/", { state: { id: response.data.id, name: response.data.name }});
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
    <form onSubmit={handleSubmit} className="bg-black border border-gray-700 p-6 sm:p-8 rounded-lg w-full max-w-md">
      
      <h2 className="text-white text-2xl mb-6 text-center">Realize seu Login</h2>
      <h6 className="text-white text-1xl mb-6 text-center">Exclusiva de Professores</h6>
      <div className="mb-4">
        <label className="block text-white mb-1">Apelido</label>
        <input
          type="text"
          className="w-full bg-black text-white border border-gray-600 px-3 py-2 rounded 
                     focus:outline-none focus:border-blue-500"
          placeholder="Seu apelido"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>  
      
      <div className="mb-6">
        <label className="block text-white mb-1">Senha</label>
        <input
          type="password"
          className="w-full bg-black text-white border border-gray-600 px-3 py-2 rounded 
                     focus:outline-none focus:border-blue-500"
          placeholder="*********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button 
       type="submit"
       className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
       >Login</button>
    </form>
    </div>   
  );
}
export default LoginPage;