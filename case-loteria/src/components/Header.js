import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { goHome } from "../routes/coordinator";

const Main = styled.main`
    border: 1px solid black;
    display: flex;
    justify-content: space-evenly;
`



const Header = () => {

    const navigate = useNavigate()

    return (
        <Main>
            <h1>Loteria do Léo</h1>
            <button onClick={() => goHome(navigate)}>Home</button>
        </Main>
    )
}

export default Header