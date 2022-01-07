import styled from 'styled-components';

export const Container = styled.div`
width: 100vw;
height: 100vh;

display: flex;

position: fixed;
top: 0;
left: 0;
z-index: 20;
`

export const Content = styled.div`
width: 65vw;
height: 100vh;
padding: 30px 8px;

background: #fff;
box-shadow: 0 0 1em #666666;

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

img{
    width: 60%;
}
`

export const Background = styled.div`
width: 35vw;
height: 100vh;

background: #666666;
opacity: 0.5;
`

export const Exit = styled.button`
width: 90px;
height: 40px;

background: #52B6FF;
border-radius: 5px;
color: #fff;
font-size: 23px;

&:hover{
    cursor: pointer;
}
`

export const Text = styled.span`

`

export const Footer = styled.div`
display: flex;
gap: 30px;
flex-direction: column;
align-items: center;

img{
    width: 100px;
    height: 100px;
    border-radius: 50%;

    box-shadow: 0 0 0.5em #666666;
}
`

export const Top = styled.div`
color: #666666;
line-height: 1.15;

display: flex;
gap: 20px;
flex-direction: column;
align-items: center;
text-align: center;
`