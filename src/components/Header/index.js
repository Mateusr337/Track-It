import logoHeader from '../../assets/logoHeader.png';
import { useAuth } from '../../Providers/auth';
import { Container } from './style';

export default function Header() {

    const { user } = useAuth();
    console.log(user);

    return (
        user !== null && (
            <Container>
                <img src={logoHeader} alt="Logo app" />
                <div className="userImage">
                    <img src={user.image} alt="Imagem usuário" />
                </div>
            </ Container>
        )
    )
}
