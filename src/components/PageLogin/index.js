import Button from "../Button";
import { Container } from "./style";

export default function PageLogin() {
    return (
        <Container>
            <form>
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Senha' />
                <Button type={'submit'} text={'Entrar'} destiny={''} />
            </form>

            <Button type={'button'} text={'Não tem uma conta? cadastre-se!'} destiny={'/cadastro'} />
        </ Container>
    )
}

