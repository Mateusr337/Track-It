import Header from "../Header";
import Menu from "../Menu";
import Title from "../Title";
import Task from "../Task";
import { Container, Tasks } from "./style";


export default function PageToday() {
    return (
        <Container>
            <Header />
            <Title text={"Segunda-feira, 17/05"} description={'Nenhum Hábito concluido ainda'} />
            <Tasks>
                <Task />
                <Task />
                <Task />
                <Task />
            </Tasks>
            <Menu />
        </ Container>
    )
}