import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './reset.css';
import './style.css';

import PageLogin from "./components/PageLogin";
import PageRegister from "./components/PageRegister";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PageLogin />} />
                <Route path='/cadastro' element={<PageRegister />} />
            </Routes>
        </BrowserRouter>
    )
}

render(<App />, document.querySelector('.root'));
