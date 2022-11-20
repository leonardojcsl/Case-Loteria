import axios from "axios"
import NumeroSorteio, { BASE_URL } from "../constants"
import { useState, useEffect } from 'react'

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
    <main>
        <div>Coluna Esquerda</div>
        <div>
          <h1>MEGA SENA</h1>
        </div>
        <div>
          <p>CONCURSO  {concursos.id}</p>
          </div>
        <div>
          <p>
           {data && formatedDate}
          </p>
          </div>
        <div>
          <div>
            <ul>
              {concursos.numeros &&
                concursos.numeros.map((item) => (
                  <NumeroSorteio numbers={item} key={item} />
                ))}
            </ul>
            </div>
          <div>
            Este sorteio é meramente ilustrativo.
            </div>
        </div>
      </main>
    )
}

export default MegaSena