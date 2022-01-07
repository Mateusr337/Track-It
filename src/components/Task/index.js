import axios from 'axios';
import { CheckmarkOutline } from 'react-ionicons';
import { useAuth } from '../../Providers/auth';
import { Texts, Container, Checkbox, CurrentSequence, HighestSequence } from './style';

export default function Task({ task }) {

    const { user } = useAuth();

    function clickCheckbox(id) {
        task.done ? noFinishTask(id) : finishTask(id);
    }

    function noFinishTask(id) {
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {},
            { headers: { 'Authorization': `Bearer ${user.token}` } }
        );
        promise.then(() => window.location.reload());
    }

    function finishTask(id) {
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {},
            { headers: { 'Authorization': `Bearer ${user.token}` } }
        );
        promise.then(() => window.location.reload());
    }

    return (
        <Container>
            <Texts>
                <h1>{task.name}</h1>
                <span>Sequência atual: <CurrentSequence task={task}>{task.currentSequence} dias</CurrentSequence></span>
                <span>Seu recorde: <HighestSequence task={task}>{task.highestSequence} dias</HighestSequence></span>
            </Texts>
            <Checkbox task={task} onClick={() => clickCheckbox(task.id)}>
                <CheckmarkOutline
                    color="white"
                    height="100%"
                    width="100%"
                />
            </Checkbox>
        </Container>
    )
}


