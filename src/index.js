import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Providers/auth";
import PageLogin from "./components/PageLogin";
import PageHistory from "./components/PageHistory";
import PageRegister from "./components/PageRegister";
import PageHabits from "./components/PageHabits";
import PageToday from "./components/PageToday";

import './reset.css';
import './style.css';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PageLogin />} />
                <Route path='/cadastro' element={<PageRegister />} />
                <Route path='/habitos' element={<PageHabits />} />
                <Route path='/hoje' element={<PageToday />} />
                <Route path='/historico' element={<PageHistory />} />
            </Routes>
        </BrowserRouter>
    )
}

render(
    <AuthProvider>
        <App />
    </AuthProvider>,
    document.querySelector('.root')
);
