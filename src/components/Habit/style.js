import styled from "styled-components";


export const Container = styled.div`
height: 91px;
margin: 8px 20px;
padding: 15px;

background: #FFFFFF;
border-radius: 5px;

position: relative;
display: flex;
flex-direction: column;
justify-content: center;
`
export const Days = styled.div`
display: flex;
gap: 8px;
`

export const Icon = styled.div`
width: 13px;

position: absolute;
top: 7px;
right: 10px;

&:hover{
    cursor: pointer;
}
`
