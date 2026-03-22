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
    <div className="min-h-screen">
        <Navbar nomeUsuario={user ? user.name : ""} />        
        <PagePai />      
    </div>
  );
}

export default Home;