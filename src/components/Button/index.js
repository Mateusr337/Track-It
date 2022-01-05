import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Button({ text, type, destiny, action }) {

    return (
        <Link to={destiny} >
            <Container type={type} onClick={action}>
                <span>{text}</span>
            </ Container>
        </Link>
    )
}

const Container = styled.button`
    text-align: center;
`