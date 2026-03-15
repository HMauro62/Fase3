import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';

function Router() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/LoginPage" element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
    );
};

export default Router;