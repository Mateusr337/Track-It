import styled from 'styled-components';

export default function Title({ text, description }) {
    return (
        <Container>
            <h1>{text}</h1>
            <span>{description}</span>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100px;
    padding: 0px 5%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }

    span { 
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;
    }
`
