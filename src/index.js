import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './reset.css';
import './style.css';
import PageLogin from "./components/PageLogin";
import PageRegister from "./components/PageRegister";
import { useState } from "react";
import PageHabits from "./components/PageHabits/PageHabits";

function App() {

    const [user, setUser] = useState({});

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PageLogin user={user} setUser={setUser} />} />
                <Route path='/cadastro' element={<PageRegister />} />
                <Route path='/habitos' element={<PageHabits />} />
            </Routes>
        </BrowserRouter>
    )
}

render(<App />, document.querySelector('.root'));
