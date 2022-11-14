import styled from "styled-components";

const Main = styled.main`
    border: 1px solid black;
    display: flex;
    justify-content: space-evenly
`

const Header = () => {   
    return (
        <Main>
            <h1>Loteria do Léo</h1>
        </Main>
    )
}

export default Header