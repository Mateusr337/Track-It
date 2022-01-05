import { CheckmarkOutline } from 'react-ionicons';
import { Texts, Container, Checkbox } from './style';

export default function Task() {
    return (
        <Container>
            <Texts>
                <h1>Ler 1 capítulo de livro</h1>
                <span>Sequência atual: 3 dias</span>
                <span>Seu recorde: 5 dias</span>
            </Texts>
            <Checkbox>
                <CheckmarkOutline
                    color="white"
                    height="100%"
                    width="100%"
                />
            </Checkbox>
        </Container>
    )
}


