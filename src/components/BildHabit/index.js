import WeekDay from '../WeekDay';
import { Container, Days, Botoes, Cancel, Save } from './style';

export default function BildHabit() {

    const DaysOfWeek = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    return (
        <Container>
            <div>
                <input placeholder="Nome do hábito" type="text" />
                <Days>
                    {DaysOfWeek.map((day, index) => (
                        <WeekDay key={index} text={day} />
                    ))}
                </Days>
            </div>
            <Botoes>
                <Cancel>Cancelar</Cancel>
                <Save>Salvar</Save>
            </Botoes>
        </Container>
    )
}