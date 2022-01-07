import Header from "../Header";
import Menu from "../Menu";
import Title from "../Title";
import Task from "../Task";
import { Container, Tasks } from "./style";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useAuth } from "../../Providers/auth";
import axios from "axios";
import Menssage from "../Message-PageEmpty";

export default function PageToday() {

    const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const { user, setProgress } = useAuth();
    const [tasks, setTasks] = useState([]);
    const [subtitle, setSubtitle] = useState('Nenhum Hábito concluido ainda!');
    const [numberFinishedTasks, setNumberFinishedTasks] = useState(0);

    useEffect(() => {
        if (user) {
            const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',
                { headers: { 'Authorization': `Bearer ${user.token}` } }
            );
            promise.then(response => {
                const numberHabits = response.data.length;
                let finishedTasks = 0;
                setTasks(response.data);

                response.data.forEach(task => {
                    task.done && finishedTasks++;
                })

                if (finishedTasks !== 0) {
                    let percentage = (finishedTasks / numberHabits) * 100;
                    setSubtitle(`${percentage}% dos hábitos concluídos!`);
                    setProgress(percentage);
                    setNumberFinishedTasks(finishedTasks);
                };
            })
        }
    }, [user, setProgress]);

    return (
        <Container>
            <Header />
            <Title text={`${daysOfWeek[dayjs().day()]}, ${dayjs().format('DD/MM')}`} description={subtitle} finishedTasks={numberFinishedTasks} />
            <Tasks>
                {tasks.length !== 0 && (
                    tasks.map(task => (<Task key={task.id} task={task} />))
                )}
            </Tasks>
            {tasks.length === 0 && (
                <Menssage text={"Você não tem nenhum hábito cadastrado para hoje ainda. Click em 'Hábitos' e crie um novo para começar! :)"} />
            )}
            <Menu />
        </ Container>
    )
}