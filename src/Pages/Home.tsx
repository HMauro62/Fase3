import Navbar from '../components/Header/NavBar/NavBar2';
import '../index.css';
import PagePai from './pagePai';
import { AuthProvider } from '../components/context/AuthContext';
import { useLocation } from 'react-router-dom';

function Home() {

  const location = useLocation();

  return (
    <div>
      <AuthProvider>
        <Navbar nomeUsuario={location.state ? location.state.name : ""} />        
        <PagePai />
      </AuthProvider>       
    </div>
  );
}

export default Home;
