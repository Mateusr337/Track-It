import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Button from "../Button";
import { Container } from "./style";
import Loader from "react-loader-spinner";
import logo from '../../assets/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export default function PageLogin({ loading, setLoading }) {

    const navigate = useNavigate();
    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
    });

    function login(e) {
        e.preventDefault();
        setLoading(true);

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', { ...userLogin });
        promise.then(response => {
            navigate('/hoje');
            setLoading(false);
            localStorage.clear();
            localStorage.setItem('userData', response);
        });
        promise.catch(err => {
            setLoading(false);
            toast.error('E-mail ou senha inválidos!');
        });
    }

    function ChangeInput(e) {
        setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
    }

    return (
        <Container>
            <img src={logo} alt="Logo App" />
            <ToastContainer position="top-right" />

            <form>
                <input type="email" placeholder="E-mail" value={userLogin.email} name="email" onChange={ChangeInput} />
                <input type="password" placeholder='Senha' value={userLogin.password} name="password" onChange={ChangeInput} />

                {loading === false ? (
                    <Button type={'submit'} text={'Entrar'} destiny={''} action={login} />
                ) : (
                    <Loader type="Rings" color="#52B6FF" height={100} width={100} />
                )}
            </form>

            <Button loading={loading} type={'button'} text={'Não tem uma conta? cadastre-se!'} destiny={'/cadastro'} />
        </ Container>
    )
}

