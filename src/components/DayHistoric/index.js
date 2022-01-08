import styled from "styled-components";
import { CheckmarkOutline, CloseOutline } from 'react-ionicons'


export default function Day({ habit }) {

    return (
        <Conatiner finished={habit.done} >
            <span>{habit.name}</span>
            {habit.done ? <CheckmarkOutline /> : <CloseOutline />}
        </Conatiner>
    )
}

const Conatiner = styled.div`
width: 100%;
height: 60px;
padding: 20px;

background-color: #EA5766;
${props => props.finished && 'background: #8CC654;'}
border-radius: 10px;

display: flex;
justify-content: space-between;
align-items: center;
`
