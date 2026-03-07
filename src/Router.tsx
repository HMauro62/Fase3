import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './Pages/Home';


//import componentes: Home, about, contact

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;