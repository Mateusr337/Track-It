import { Container, Content, Background, Exit, Footer, Text, Top } from './style';
import logo from '../../assets/logo.png';
import { useAuth } from '../../Providers/auth';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

    const navigate = useNavigate();
    const { user, setNavbar } = useAuth();

    function exitApp() {
        setNavbar(false);
        navigate('/');
        localStorage.clear();
        window.location.reload();
    }

    return (
        <Container>
            <Content>
                <Top>
                    <img src={logo} alt={'Logo do app'} />
                    {user && <Text>Obrigado pela <br /> preferência, {user.name}! :)</Text>}
                </Top>
                <Footer>
                    {user && <img src={user.image} alt={'Imagem do usuário logado'} />}
                    <Exit onClick={exitApp} >Sair</Exit>
                </Footer>
            </Content>
            <Background onClick={() => setNavbar(false)} />
        </Container>
    )
}