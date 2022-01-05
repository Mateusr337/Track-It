import styled from 'styled-components';

const Container = styled.div`
    width: 100vh;
    height: 100vh;

    align-items: center;
    justify-content: center;
    gap: 20px;

    display: flex;
    flex-direction: column;

    form {
        width: 100%;

        align-items: center;
        gap: 6px;

        display: flex;
        flex-direction: column;

        input {
        border: 1px solid #D5D5D5;

            &::placeholder {
                padding-left: 10px;
            }
        }

        button {
            background-color: #52B6FF;
            color: #FFFFFF;
            font-size: 20.976px;
            line-height: 26px;
            text-decoration-line: none;
            &:hover {
                cursor: pointer;
            }
        }

        a { 
            width: 90%;
        }
    }

    button, input {
        width: 90%;
        height: 40px;
        border-radius: 5px;
    }

    button {
        width: 100%;
        background-color: #ffffff;
        color: #52B6FF;
        font-size: 13.976px;
        line-height: 17px;
        text-decoration-line: underline;
        span { 
            &:hover{
                cursor: pointer;
            }
        }
    }
`

export { Container }