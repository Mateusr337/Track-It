import { Container } from "./style";
import axios from 'axios';
import Button from "../Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function PageRegister() {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        name: '',
        image: '',
        password: ''
    });

    function register(e) {
        e.preventDefault();
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', { ...user });
        promise.then(response => navigate('/'));
        promise.catch(err => console.log(err));
    }

    function ChangeInput(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <Container>
            <form>
                <input type="email" placeholder="E-mail" value={user.email} name="email" onChange={ChangeInput} />
                <input type="password" placeholder='Senha' value={user.password} name="password" onChange={ChangeInput} />
                <input type="text" placeholder='Nome' value={user.name} name="name" onChange={ChangeInput} />
                <input type="url" placeholder="Imagem" value={user.image} name="image" onChange={ChangeInput} />
                <Button type={'submit'} text={'Cadastrar'} destiny={''} action={register} />
            </form>

            <Button type="button" text={'Já tem uma conta? Faça login'} destiny={'/'} />
        </ Container>
    )
}