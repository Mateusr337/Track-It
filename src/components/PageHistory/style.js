import styled from "styled-components";

export const Container = styled.div`
min-height: 100vh;
padding: 70px 0;
background: #E5E5E5;

display: flex;
flex-direction: column;
align-items: center;

.styleDay-green {
    padding: 2px;
    color: black;
    background-color: #8CC654;
    border-radius: 50%;
}

.styleDay-red {
    padding: 2px;
    color: black;
    background-color: #EA5766;
    border-radius: 50%;
}
`

export const ContainerCalendar = styled.div`
width: 100vw;
max-width: 500px;
padding: 20px;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-sizing: border-box;
`

export const ContainerDays = styled.div`
width: 100%;
padding: 20px;

display: flex;
flex-direction: column;
gap: 20px;
`

export const DateSelected = styled.div`
 padding-left: 20px;
`
