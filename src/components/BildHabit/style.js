import styled from "styled-components";

export const Container = styled.div`
height: 180px;
padding: 18px;
margin: 0 18px 30px;

background-color: #fff;
border-radius: 5px;

display: flex;
flex-direction: column;
justify-content: space-between;

input{
    width: 100%;
    height: 45px;
    border-radius: 5px;
}
`

export const Days = styled.div`
display: flex;
gap: 8px;
`

export const Botoes = styled.div`
display: flex;
justify-content: end;
align-items: center;
gap: 20px;
`

export const Cancel = styled.div`
font-size: 15.976px;
line-height: 20px;
color: #52B6FF;
text-align: center;
${props => props.loading && 'opacity: 0.5;'}

&:hover{
    cursor: pointer;
}
`

export const Save = styled.div`
width: 84px;
height: 35px;

background: #52B6FF;
color: #fff;
border-radius: 4.63636px;
${props => props.loading && 'opacity: 0.5;'}

display: flex;
justify-content: center;
align-items: center;

&:hover{
    cursor: pointer;
}
`