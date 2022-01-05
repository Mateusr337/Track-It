import { Container } from "./style";
import axios from 'axios';
import Button from "../Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "react-loader-spinner";
import logo from '../../assets/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export default function PageRegister({ loading, setLoading }) {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        name: '',
        image: '',
        password: ''
    });

    function register(e) {
        e.preventDefault();
        setLoading(true);

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', { ...user });
        promise.then(response => {
            navigate('/');
            setLoading(false);
        });
        promise.catch(err => {
            console.log(err);
            setLoading(false);
            toast.error('E-mail ou senha inválidos!');
        });
    }

    function ChangeInput(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <Container>
            <img src={logo} alt="Logo App" />
            <ToastContainer position="top-right" />

            <form>
                <input type="email" placeholder="E-mail" value={user.email} name="email" onChange={ChangeInput} />
                <input type="password" placeholder='Senha' value={user.password} name="password" onChange={ChangeInput} />
                <input type="text" placeholder='Nome' value={user.name} name="name" onChange={ChangeInput} />
                <input type="url" placeholder="Imagem" value={user.image} name="image" onChange={ChangeInput} />

                {loading === false ? (
                    <Button type={'submit'} text={'Cadastrar'} destiny={''} action={register} />
                ) : (
                    <Loader type="Rings" color="#52B6FF" height={100} width={100} />
                )}
            </form>

            <Button type="button" text={'Já tem uma conta? Faça login'} destiny={'/'} />
        </ Container>
    )
}