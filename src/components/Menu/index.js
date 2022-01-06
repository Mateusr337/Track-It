import { Link } from 'react-router-dom';
import { Container, Button } from './style';

export default function Menu() {
    return (
        <>
            <Container>
                <Link to='/habitos'>Hábitos</Link>
                <Link to='/historico'>Histórico</Link>
                <Button to='/hoje'><span>Hoje</span></Button>
            </Container>
        </>

    )
}


