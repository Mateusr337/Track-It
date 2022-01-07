import { useState } from "react";
import { Calendar } from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import Header from "../Header";
import Menu from "../Menu";
import Menssage from "../Message-PageEmpty";
import Title from "../Title";
import { Container, ContainerCalendar, CalendarStyle } from './style';


export default function PageHistory() {

    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    }

    return (
        <Container>
            <Header />
            <Title text={'Histórico'} />
            <Menssage text={'Em breve você poderá ver o histórico dos seus hábitos aqui!'} />
            <ContainerCalendar>
                <Calendar
                    className={'CalendarStyle'}
                    onChange={onChange}
                    value={date}
                />
            </ContainerCalendar>
            <Menu />
        </Container>
    )
}