import axios from 'axios';
import { useState } from 'react';
import { useAuth } from '../../Providers/auth';
import WeekDay from '../WeekDay';
import { Container, Days, Botoes, Cancel, Save } from './style';
import Loader from "react-loader-spinner";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function BildHabit({ setCreatingHabit }) {

    const [daysSelected, setDaysSelected] = useState([]);
    const [loading, setLoading] = useState(false);
    const [habit, setHabit] = useState('');
    const { user } = useAuth();
    const daysOfWeek = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const daysOfWeekNumber = [7, 1, 2, 3, 4, 5, 6];
    let selected = false;

    function cancelBild() {
        setCreatingHabit(false);
        setDaysSelected([]);
    }

    function changeDays(day) {
        let arr = daysSelected;
        if (daysSelected.includes(day)) {
            arr.splice(daysSelected.indexOf(day), 1);
            setDaysSelected([...arr]);
        } else { setDaysSelected([...daysSelected, day]) }
    }

    function checkData() {
        if (habit === '') {
            toast.warn('Insira um hábito!');
        } else if (daysSelected.length === 0) {
            toast.warn('Selecione pelo menos um dia da semana!')
        } else { CreateHabit(); }
    }

    function CreateHabit() {
        setLoading(true);
        console.log(habit, daysSelected.sort(), user.token)
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
            { name: habit, days: daysSelected.sort() },
            { headers: { 'Authorization': `Bearer ${user.token}` } }
        )
        promise.then(response => {
            setCreatingHabit(false);
            setDaysSelected([]);
            setLoading(false);
            window.location.reload();
        })
        promise.catch(err => setLoading(false))
    }

    return (
        <Container>
            <div>
                <input disabled={loading} placeholder="Nome do hábito" type="text" onChange={e => setHabit(e.target.value)} value={habit} />

                <Days>
                    {daysOfWeek.map((day, index) => {
                        const number = daysOfWeekNumber[index];
                        daysSelected.includes(number) ? selected = true : selected = false;

                        return <WeekDay loading={loading} key={index} number={number} text={day} changeDays={changeDays} selected={selected} />
                    })}
                </Days>
            </div>

            <Botoes>
                <Cancel onClick={cancelBild} loading={loading} disabled={loading}>Cancelar</Cancel>

                <Save loading={loading} onClick={checkData} disabled={loading}>
                    {loading ? <Loader type="ThreeDots" color="white" width='50px' /> : 'Salvar'}
                </Save>
            </Botoes>
            <ToastContainer limit={1} />
        </Container>
    )
}