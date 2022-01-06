import styled from "styled-components"

export default function WeekDay({ text }) {
    return (
        <Container >
            <span>{text}</span>
        </Container>
    )
}

const Container = styled.div`
width: 30px;
height: 30px;
margin-top: 10px;

border: 1px solid #D5D5D5;
color: #D5D5D5;
font-size: 19.976px;
line-height: 25px;
border-radius: 5px;

display: flex;
justify-content: center;
align-items: center;
`