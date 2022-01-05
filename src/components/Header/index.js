import logoHeader from '../../assets/logoHeader.png';
import { Container } from './style';

export default function Header() {

    return (
        <Container>
            <img src={logoHeader} alt="Logo app" />
            <div className="userImage">
                <img src={logoHeader} alt="Imagem usuário" />
            </div>
        </ Container>
    )
}
