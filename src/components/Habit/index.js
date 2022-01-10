import { Container, Days, Icon } from './style';
import WeekDay from '../WeekDay';
import { TrashOutline } from 'react-ionicons';
import { useAuth } from '../../Providers/auth';
import axios from 'axios';
import Confirm from '../Confirm';
import { useState } from 'react';

export default function Habit({ habit }) {

    const DaysOfWeek = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const daysOfWeekNumber = [7, 1, 2, 3, 4, 5, 6];
    const { user } = useAuth();
    const [confirmShow, setConfirmShow] = useState(false);

    function removeHabit(id) {
        const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
            { headers: { 'Authorization': `Bearer ${user.token}` } }
        )
        promise.then(() => window.location.reload())
    }

    return (
        <Container>
            {confirmShow && <Confirm setConfirmShow={setConfirmShow} id={habit.id} removeHabit={removeHabit} />}
            <Icon onClick={() => setConfirmShow(true)}>
                <TrashOutline
                    color='#666666'
                    width='100%'
                />
            </Icon>

            <span>{habit.name}</span>

            <Days>
                {DaysOfWeek.map((day, index) => {
                    let selected;
                    habit.days.includes(daysOfWeekNumber[index]) ? selected = true : selected = false;

                    return <WeekDay key={index} text={day} selected={selected} />
                })}
            </Days>
        </Container>
    )
}