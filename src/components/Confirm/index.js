import styled from "styled-components";


export default function Confirm({ setConfirmShow, id, removeHabit }) {

    return (
        <>
            <Background />
            <Box>
                <h1>Deseja realmente excluir este hábito?</h1>
                <Buttons>
                    <Cancel onClick={() => setConfirmShow(false)} >Cancelar</Cancel>
                    <Remove onClick={() => removeHabit(id)} >Excluir</Remove>
                </Buttons>
            </Box>
        </>
    );
}

const Background = styled.div`
width: 100vw;
height: 100vh;

background: #fff;
opacity: 0.5;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

position: fixed;
top: 0;
left: 0;
z-index: 500;
`

const Box = styled.div`
max-width: 350px;
width: 100vw;
height: 200px;
background-color: #52B6FF;
border-radius: 10px;

display: flex;
gap: 50px;
flex-direction: column;
justify-content: center;
align-items: center;

position: fixed;
z-index: 501;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;

h1 {
font-size: 20px;
color: #fff;
text-align: center;
}
`

const Buttons = styled.div`
font-weight: 700;
font-size: 16px;
display: flex;
align-items: center;
gap: 35px;
`

const Remove = styled.div`
width: 80px;
height: 40px;

background: #fff;
border-radius: 5px;
color: #52B6FF;

display: flex;
justify-content: center;
align-items: center;

&:hover{
    cursor: pointer;
}
`

const Cancel = styled.div`
color: #fff;

&:hover{
    cursor: pointer;
}
`