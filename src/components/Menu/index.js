import { Link } from 'react-router-dom';
import { Container, Button } from './style';

export default function Menu() {
    return (
        <>
            <Container>
                <Link to='/habitos'>Hábitos</Link>
                <Link to='/historico'>Histórico</Link>
                <Button>Hoje</Button>
            </Container>
        </>

    )
}


