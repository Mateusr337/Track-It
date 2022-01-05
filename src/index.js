import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './reset.css';
import './style.css';
import PageLogin from "./components/PageLogin";
import PageRegister from "./components/PageRegister";
import PageHabits from "./components/PageHabits";
import PageToday from "./components/PageToday";
import { useState } from "react";


function App() {

    const [loading, setLoading] = useState(false);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PageLogin loading={loading} setLoading={setLoading} />} />
                <Route path='/cadastro' element={<PageRegister loading={loading} setLoading={setLoading} />} />
                <Route path='/habitos' element={<PageHabits loading={loading} setLoading={setLoading} />} />
                <Route path='/hoje' element={<PageToday loading={loading} setLoading={setLoading} />} />
            </Routes>
        </BrowserRouter>
    )
}

render(<App />, document.querySelector('.root'));
