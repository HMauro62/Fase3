import Navbar from '../components/Header/NavBar/NavBar2';
import '../index.css';
import PagePai from './pagePai';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const userStorage = localStorage.getItem("usuarioLogado");
  const user = userStorage ? JSON.parse(userStorage) : null;

  function handleLogout() {
    localStorage.removeItem("usuarioLogado");
    navigate("/LoginPage");
  }

  return (
    <div className="min-h-screen bg-black">
        <Navbar nomeUsuario={user ? user.name : ""} />        
        
        <div className="flex justify-end px-8 py-2 border-b border-gray-800">
            <button 
              onClick={handleLogout} 
              className="bg-red-600 hover:bg-red-700 text-white py-1 px-4 rounded font-semibold text-sm"
            >
              Sair (Logout)
            </button>
        </div>

        <PagePai />      
    </div>
  );
}

export default Home;