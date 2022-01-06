import { Container, Days, Icon } from './style';
import WeekDay from '../WeekDay';
import { TrashOutline } from 'react-ionicons';

export default function Habit() {

    const DaysOfWeek = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    return (
        <Container>
            <Icon>
                <TrashOutline
                    color='#666666'
                    width='100%'
                />
            </Icon>
            <span>Ler 1 capítulo de livro</span>
            <Days>
                {DaysOfWeek.map((day, index) => (
                    <WeekDay key={index} text={day} />
                ))}
            </Days>
        </Container>
    )
}