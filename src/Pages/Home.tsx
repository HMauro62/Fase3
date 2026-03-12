import Navbar from '../components/Header/NavBar/NavBar2';
import '../index.css';
import PagePai from './pagePai';
import { AuthProvider } from '../components/context/AuthContext';

function Home() {

  return (
    <div>
      <AuthProvider>
        <Navbar />        
        <PagePai />
      </AuthProvider>       
    </div>
  );
}

export default Home;
