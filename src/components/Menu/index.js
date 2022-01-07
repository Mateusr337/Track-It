import { Link } from 'react-router-dom';
import { Container, Button } from './style';
import { useAuth } from '../../Providers/auth';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Menu() {

    const { progress } = useAuth();

    return (
        <>
            <Container>
                <Link to='/habitos'>Hábitos</Link>
                <Link to='/historico'>Histórico</Link>

                <Button to='/hoje'>
                    <CircularProgressbar
                        value={progress}
                        text={'Hoje'}
                        strokeWidth={10}
                        styles={buildStyles({
                            textColor: "#fff",
                            pathColor: "#ffffff",
                            trailColor: "transparent"
                        })}
                    />
                </Button>
            </Container>
        </>

    )
}


