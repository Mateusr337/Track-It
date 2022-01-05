import Header from "../Header";
import Menu from "../Menu";
import Title from "../Title";
import { Container } from './style';


export default function PageHabits() {
    return (
        <Container>
            <Header />
            <Title text={'Histórico'} />
            <span>Em breve você poderá ver o histórico dos seus hábitos aqui!</span>
            <Menu />
        </Container>
    )
}