import axios from "axios";
import { useEffect, useState } from "react";
import { Calendar } from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useAuth } from "../../Providers/auth";
import Header from "../Header";
import Menu from "../Menu";
import Menssage from "../Message-PageEmpty";
import Title from "../Title";
import { Container, ContainerCalendar } from './style';


export default function PageHistory() {

    const [date, setDate] = useState(new Date());
    const { user } = useAuth();

    useEffect(() => {
        if (user) {
            const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily',
                { headers: { 'Authorization': `Bearer ${user.token}` } }
            );
            promise.then(response => '');
        }
    });

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
                    className={"react-calendar"}
                    onChange={onChange}
                    value={date}
                />
            </ContainerCalendar>
            <Menu />
        </Container>
    )
}