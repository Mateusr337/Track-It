import styled from 'styled-components';


export const Container = styled.div`
width: 90vw;
height: 94px;
padding: 5%;

background: #FFFFFF;
border-radius: 5px;

display: flex;
align-items: center;
justify-content: space-between;
`
export const Texts = styled.div`
width: 70%;
height: 100%;

color: #666666;

display: flex;
flex-direction: column;
justify-content: center;
gap: 7px;

h1 {
    font-size: 19.976px;
    line-height: 25px;
}

span { 
    font-size: 12.976px;
    line-height: 16px;
}
`
export const Checkbox = styled.div`
width: 69px;
height: 69px;

background: #EBEBEB;
border: 1px solid #E7E7E7;
border-radius: 5px;
`