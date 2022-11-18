import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { goHome } from "../routes/coordinator";
import logo from "../images/logo.png"

const Main = styled.main`
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
`

const Logo = styled.img`
    max-height: 5em;
    max-width: 5em;
`

const ButtonDiv = styled.div `
    border: 1px solid black;
    display: flex;
    justify-content: center;
`

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 4px;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
`

const Header = () => {

    const navigate = useNavigate()

    return (
        <Main>
            <div>
                <Logo src={logo}/>
            </div>
            <div>
                <h1></h1>
            </div>
            <ButtonDiv>
                <Button onClick={() => goHome(navigate)}>Home</Button>
            </ButtonDiv>
        </Main>
    )
}

export default Header