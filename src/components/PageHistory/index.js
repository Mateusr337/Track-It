import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Calendar } from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useAuth } from "../../Providers/auth";
import Header from "../Header";
import Menu from "../Menu";
import Menssage from "../Message-PageEmpty";
import Title from "../Title";
import Day from "../DayHistoric";
import { Container, ContainerCalendar, ContainerDays, DateSelected } from './style';


export default function PageHistory() {

    const [date, setDate] = useState(new Date());
    const { user } = useAuth();
    const [dateHabits, setDateHabits] = useState([]);
    const [habitsHistoric, setHabitsHistoric] = useState([]);
    const [allDates, setAllDates] = useState([]);
    const formatDay = ("0" + date.getDate()).slice(-2) + "/" + ("0" + (date.getMonth() + 1)).slice(-2) + "/" + date.getFullYear();


    useEffect(() => {
        if (user) {
            const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily',
                { headers: { 'Authorization': `Bearer ${user.token}` } }
            );
            promise.then(response => {
                setHabitsHistoric(response.data);
                let dateArray = [];
                let dates = [];

                response.data.forEach(data => {
                    data.habits.forEach(habit => {
                        console.log(convertDate(habit.date).dateFormat3)
                        convertDate(habit.date).dateFormat3 !== dayjs().format('DD/MM/YYYY') && dates.push(convertDate(habit.date).dateFormat3);
                        let className = verificationHabits(habit);
                        if (convertDate(habit.date).dateFormat3 !== dayjs().format('DD/MM/YYYY')) {
                            dateArray.push({
                                date: habit.date,
                                style: className
                            });
                        }
                    })
                })
                setAllDates(dates);
                setDateHabits(dateArray);
            });
        }
    }, [user]);

    function verificationHabits(habit) {
        let name;
        let fails = [];

        if (habit.done && !fails.includes(habit.date)) {
            name = 'styleDay-green';
        } else {
            fails.push(habit.date);
            name = 'styleDay-red';
        }
        return name;
    }

    const onChange = date => {
        setDate(date);
    };

    function setClass(date) {
        if (dateHabits) {
            const dateobj = dateHabits.find((x) => {
                return (
                    date.getDay() === new Date(x.date).getDay() &&
                    date.getMonth() === new Date(x.date).getMonth() &&
                    date.getDate() === new Date(x.date).getDate()
                );
            });
            return dateobj ? dateobj.style : "";
        }
    }

    function convertDate(date) {
        var date = date.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})/);
        if (date == null) {
            return false;
        } else {
            var dateObj = {
                dateFormat1: date[3] + '.' + date[2] + '.' + date[1],
                dateFormat2: date[1] + '-' + date[2] + '-' + date[3],
                dateFormat3: date[3] + '/' + date[2] + '/' + date[1],
                time: date[4] + ':' + date[5] + ':' + date[6],
            };
            return dateObj;
        }
    };

    return (
        <Container>
            <Header />
            <Title text={'Histórico'} />
            <Menssage text={'Em breve você poderá ver o histórico dos seus hábitos aqui!'} />

            <ContainerCalendar>
                <Calendar
                    value={date}
                    locale="pt-Br"
                    onChange={onChange}
                    formatDay={(locale, date) => dayjs(date).format("DD")}
                    tileClassName={({ activeStartDate, date, view }) => setClass(date)}
                />
            </ContainerCalendar>

            {allDates.includes(formatDay) && (
                <ContainerDays>
                    <DateSelected>{formatDay}</DateSelected>
                    {habitsHistoric.map(data => {
                        if (data.day === formatDay) {
                            // return day.habits.forEach(() => <Day />)
                            let habits = [];
                            data.habits.forEach((habit, index) => {
                                habits.push(<Day key={index} habit={habit} />);
                            });
                            return habits;
                        }
                    })}
                </ContainerDays>
            )}
            <Menu />
        </Container>
    )
}