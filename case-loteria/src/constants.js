import styled from "styled-components"

export const BASE_URL = "https://brainn-api-loterias.herokuapp.com/api/v1"

export const megaColor = "#6befa3"

const Lista = styled.li`
  background-color: #fff;
  border-radius: 50%;
  padding: 1.5em;
  margin: 20px;
  font-size: 1.7rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 900px) {
    padding: 1em;
  }
`

const NumeroSorteio = ({ numbers }) => {
    return <Lista>{numbers}</Lista>
}

export default NumeroSorteio

