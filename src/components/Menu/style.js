import styled from "styled-components"


export const Container = styled.div`
width: 100vw;
height: 70px;

background: #fff;
font-size: 17.976px;
line-height: 22px;

display: flex;
align-items: center;
justify-content: space-between;
padding: 0px 10vw;

position: fixed;
bottom: 0;
left: 0;
index: 10;

a{
    color: #52B6FF;
}
`

export const Button = styled.div`
width: 91px;
height: 91px;

background: #52B6FF;
border-radius: 50%;
color: #fff;

position: absolute;
bottom: 10px;
left: 0;
right: 0;
margin: auto;

display: flex;
justify-content: center;
align-items: center;
`