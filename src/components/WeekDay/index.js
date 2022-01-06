import styled from "styled-components"

export default function WeekDay({ text, number, changeDays, selected, loading }) {

    return (
        <Container onClick={() => changeDays(number)} selected={selected} disabled={loading}>
            <span>{text}</span>
        </Container>
    )
}

const Container = styled.button`
width: 30px;
height: 30px;
margin-top: 10px;

border: 1px solid #D5D5D5;
background-color: #FFFFFF;
color: #D5D5D5;
font-size: 19.976px;
line-height: 25px;
border-radius: 5px;
${props => props.selected === true && 'background-color: #cfcfcf;'}
${props => props.selected === true && 'color: white;'}

display: flex;
justify-content: center;
align-items: center;

&:hover{
    cursor: pointer;
}
`