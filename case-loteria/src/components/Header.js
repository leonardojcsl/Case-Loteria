import styled from "styled-components";

const Main = styled.main `
    border: 1px solid black;
    display: flex
`

const Header = () => {
    return (
        <Main>
            <h1>Loteria do Léo</h1>
            <button>Retornar a Tela Inicial</button>
        </Main>
    )
}

export default Header