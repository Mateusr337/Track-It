import { useState } from "react";
import { Calendar } from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import Header from "../Header";
import Menu from "../Menu";
import Menssage from "../Message-PageEmpty";
import Title from "../Title";
import { Container, ContainerCalendar } from './style';


export default function PageHistory() {

    const [value, onChange] = useState(new Date());

    return (
        <Container>
            <Header />
            <Title text={'Histórico'} />
            <Menssage text={'Em breve você poderá ver o histórico dos seus hábitos aqui!'} />
            <ContainerCalendar>
                <Calendar
                    onChange={onChange}
                    value={value}
                />
            </ContainerCalendar>
            <Menu />
        </Container>
    )
}