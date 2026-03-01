import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './Pages/Home';


//import componentes: Home, about, contact

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<h1>About</h1>} />
                <Route path="/contact" element={<h1>Contact</h1>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;