import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import CrudAdmin from './Pages/CrudAdmin';
import ProtectedRoute from './components/ProtectedRoute';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/LoginPage" element={<LoginPage />} />
                
                {/* Rota Home: Só entra se estiver logado */}
                <Route path="/" element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                } />

                {/* Rota do CRUD: Só entra se estiver logado E for Admin */}
                <Route path="/admin" element={
                    <ProtectedRoute requireAdmin={true}>
                        <CrudAdmin />
                    </ProtectedRoute>
                } />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;