import Header from "../Header";
import Menu from "../Menu";
import Menssage from "../Message-PageEmpty";
import Title from "../Title";
import { Container } from './style';



export default function PageHistory() {
    return (
        <Container>
            <Header />
            <Title text={'Histórico'} />
            <Menssage text={'Em breve você poderá ver o histórico dos seus hábitos aqui!'} />
            <Menu />
        </Container>
    )
}