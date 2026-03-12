import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import { AuthProvider } from './components/context/AuthContext';

function Router() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/LoginPage" element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
};

export default Router;