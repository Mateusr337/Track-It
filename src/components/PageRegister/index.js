import { Container } from "./style";
import axios from 'axios';
import Button from "../Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "react-loader-spinner";
import logo from '../../assets/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export default function PageRegister() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [userRegister, setUserRegister] = useState({
        email: '',
        name: '',
        image: '',
        password: ''
    });

    function register(e) {
        e.preventDefault();
        setLoading(true);

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', { ...userRegister });
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
        setUserRegister({ ...userRegister, [e.target.name]: e.target.value })
    }

    return (
        <Container>
            <img src={logo} alt="Logo App" />
            <ToastContainer position="top-right" />

            <form>
                <input type="email" placeholder="E-mail" value={userRegister.email} name="email" onChange={ChangeInput} />
                <input type="password" placeholder='Senha' value={userRegister.password} name="password" onChange={ChangeInput} />
                <input type="text" placeholder='Nome' value={userRegister.name} name="name" onChange={ChangeInput} />
                <input type="url" placeholder="Imagem" value={userRegister.image} name="image" onChange={ChangeInput} />

                {loading === false ? (
                    <Button type={'submit'} text={'Cadastrar'} destiny={''} action={register} />
                ) : (
                    <Loader type="ThreeDots" color="#52B6FF" height={100} width={100} />
                )}
            </form>

            <Button loading={loading} type="button" text={'Já tem uma conta? Faça login'} destiny={'/'} />
        </ Container>
    )
}