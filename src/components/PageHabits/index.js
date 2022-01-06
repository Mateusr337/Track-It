import Header from "../Header";
import Menu from "../Menu";
import Title from "../Title";
import Habit from "../Habit";
import BildHabit from "../BildHabit";
import { Container, Top, CreateHabit } from './style';
import { AddOutline } from 'react-ionicons';
import { useEffect, useState } from "react";
import Menssage from "../Message-PageEmpty";
import axios from "axios";
import { useAuth } from "../../Providers/auth";


export default function PageHabits() {

    const [creatingHabit, setCreatingHabit] = useState(false);
    const [message, setMessage] = useState(true);
    const [habits, setHabits] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        if (user !== null) {
            const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
                { headers: { 'Authorization': `Bearer ${user.token}` } }
            );
            promise.then(response => {
                setHabits(response.data);
                response.data.length > 0 && setMessage(false);
            })
        }
    }, [user])

    function showBildHabit() {
        setCreatingHabit(true);
    }

    return (
        <Container>
            <Header />
            <Top>
                <Title text={"Meus hábitos"} />
                <CreateHabit onClick={showBildHabit}>
                    <AddOutline
                        color='#fff'
                        width="25px"
                    />
                </CreateHabit>
            </Top>

            {creatingHabit && <BildHabit setCreatingHabit={setCreatingHabit} />}
            {(message && habits.length === 0) && <Menssage text={"Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"} />}
            {(habits && !creatingHabit) && (
                habits.map((habit) => {
                    return <Habit key={habit.id} habit={habit} />
                })
            )}

            <Menu />
        </Container>
    )
}
