import axios from 'axios';
import { CheckmarkOutline } from 'react-ionicons';
import { useAuth } from '../../Providers/auth';
import { Texts, Container, Checkbox } from './style';

export default function Task({ task }) {

    const { user } = useAuth();

    function finishTask(id) {
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/{id}/check`,
            { headers: { 'Authorization': `Bearer ${user.token}` } }
        );
        promise.then(() => window.location.reload());
    }

    console.log(task);

    return (
        <Container>
            <Texts>
                <h1>{task.name}</h1>
                <span>Sequência atual: {task.currentSequence} dias</span>
                <span>Seu recorde: {task.highestSequence} dias</span>
            </Texts>
            <Checkbox onClick={() => finishTask(task.id)}>
                <CheckmarkOutline
                    color="white"
                    height="100%"
                    width="100%"
                />
            </Checkbox>
        </Container>
    )
}


