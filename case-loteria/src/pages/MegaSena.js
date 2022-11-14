import axios from "axios"
import NumeroSorteio, { BASE_URL } from "../constants"
import { useState, useEffect } from 'react'
import { GameNumberDate, GameTitle, GeneralContainer, LeftCol, NumbersWrap, Obs, RightCol, Title, TitleWrap } from "./MegaSenaStyled"

const MegaSena = () => {

    const [relacaoConcurso, setRelacaoConcurso] = useState([])
    const [concursoId, setConcursoId] = useState("")
    const [concursos, setConcursos] = useState([])
  
    const getRelacaoConcursos = () => {
      axios
        .get(`${BASE_URL}/loterias-concursos`)
        .then((res) => {
          setRelacaoConcurso(res.data[0])
          if (relacaoConcurso) {
            setConcursoId(res.data[0].concursoId)
          }
  
          
        })
        .catch((error) => {
          console.log(error)
        })
    }
  
    const getConcursosById = (id) => {
      axios
        .get(`${BASE_URL}/concursos/${id}`)
        .then((res) => {
          setConcursos(res.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  
    useEffect(() => {
      getRelacaoConcursos()
    }, [])
  
    useEffect(() => {
      if (concursoId) getConcursosById(concursoId)
    }, [concursoId])
  
    const data = new Date(concursos?.data)
    const formatedDate = data.toLocaleDateString("pt-BR", { timeZone: "UTC" })
  
    return (
      <GeneralContainer>
        <LeftCol></LeftCol>
        <TitleWrap>
          <Title>MEGA SENA</Title>
        </TitleWrap>
        <GameTitle>
          <p>CONCURSO  {concursos.id}</p>
        </GameTitle>
        <GameNumberDate>
          <p>
           {data && formatedDate}
          </p>
        </GameNumberDate>
        <RightCol>
          <NumbersWrap>
            <ul>
              {concursos.numeros &&
                concursos.numeros.map((item) => (
                  <NumeroSorteio numbers={item} key={item} />
                ))}
            </ul>
          </NumbersWrap>
          <Obs>
            Este sorteio é meramente ilustrativo.
          </Obs>
        </RightCol>
      </GeneralContainer>
    )
}

export default MegaSena