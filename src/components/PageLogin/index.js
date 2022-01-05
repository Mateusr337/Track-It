import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import Button from "../Button";
import { Container } from "./style";

export default function PageLogin({ user, setUser }) {

    const navigate = useNavigate();
    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
    });

    function login(e) {
        e.preventDefault();
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', { ...userLogin });
        promise.then(response => {
            setUser(response);
            navigate('/habitos');
        });
    }

    function ChangeInput(e) {
        setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
    }

    return (
        <Container>
            <form>
                <input type="email" placeholder="E-mail" value={userLogin.email} name="email" onChange={ChangeInput} />
                <input type="password" placeholder='Senha' value={userLogin.password} name="password" onChange={ChangeInput} />
                <Button type={'submit'} text={'Entrar'} destiny={''} action={login} />
            </form>

            <Button type={'button'} text={'Não tem uma conta? cadastre-se!'} destiny={'/cadastro'} />
        </ Container>
    )
}

