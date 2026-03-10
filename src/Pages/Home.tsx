import Navbar from '../components/Header/NavBar/NavBar2';
import '../index.css';
import PagePai from './pagePai';
import { AuthProvider } from '../components/context/AuthContext';
import { ErrorBoundary } from '../components/errs/ErrorBoundary';

function Home() {

  return (
    <div>

      <AuthProvider>
        <ErrorBoundary>
          <Navbar />
        </ErrorBoundary>
        <ErrorBoundary>
          <PagePai />
        </ErrorBoundary>
      </AuthProvider>
    </div>
  );
}

export default Home;
