import Navbar from '../components/Header/NavBar/NavBar2';
import '../index.css';
import PagePai from './pagePai';
import { useLocation } from 'react-router-dom';

function Home() {

  const location = useLocation();

  return (
    <div>
        <Navbar nomeUsuario={location.state ? location.state.name : ""} />        
        <PagePai />      
    </div>
  );
}

export default Home;
