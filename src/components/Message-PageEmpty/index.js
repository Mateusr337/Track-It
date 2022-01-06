import styled from "styled-components"

export default function Menssage({ text }) {
    return <Text>{text}</Text>
}

const Text = styled.div`
padding: 0px 5%;
font-size: 17.976px;
line-height: 22px;

color: #666666;
`