import Button from "../Button";
import { Container } from "./style";

export default function PageRegister() {
    return (
        <Container>
            <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder='Senha' />
                <input type="text" placeholder='Nome' />
                <input type="url" placeholder="Imagem" />
                <Button type={'submit'} text={'Cadastrar'} destiny={''} />
            </form>

            <Button type="button" text={'Já tem uma conta? Faça login'} destiny={'/'} />
        </ Container>
    )
}