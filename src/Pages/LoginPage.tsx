//Página de teste na abordagem useAuth
import { useState } from "react";
import { useAuth } from '../components/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { ErrorBoundary } from '../components/errs/ErrorBoundary';
import { AuthProvider } from "../components/context/AuthContext";

function LoginPage() {
  const auth = useAuth();            // Pode ser nulo
  const login = auth?.login;         // sem definição se login for nulo
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();

    // Se está logado? Então não chame a função
    if (!login) return;   

    await login(email, password);

    navigate("/");
  }

  return (
    <ErrorBoundary>
    <AuthProvider>
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
    <form onSubmit={handleSubmit} className="bg-black border border-gray-700 p-6 sm:p-8 rounded-lg w-full max-w-md">
      
      <h2 className="text-white text-2xl mb-6 text-center">Realize seu Login</h2>
      <h6 className="text-white text-1xl mb-6 text-center">Exclusiva de Professores</h6>
      <div className="mb-4">
        <label className="block text-white mb-1">Email</label>
        <input
          type="email"
          className="w-full bg-black text-white border border-gray-600 px-3 py-2 rounded 
                     focus:outline-none focus:border-blue-500"
          placeholder="Seu @email.com(.br)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
    </AuthProvider>  
    </ErrorBoundary>
  );
}
export default LoginPage;