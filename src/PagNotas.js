import Settings from "./settings";
import "./stylesheets/style.css";
import { useState, useEffect } from "react"
import Nota from './Nota'

function PagNotas() {
  // const titulo = "Notas"

  const [notas, setNotas] = useState(null)

  const handleDelete = (id) => {
    const novasNotas = notas.filter(nota => nota.nota_id !== id)
    setNotas(novasNotas)
  }

  const [isPending, setIsPeding] = useState(true)

  useEffect(() => {
    fetch('http://localhost:3030/api/allPosts/')
      .then(res => {
        return res.json()
      })
      .then((data) => {
        // console.log(data)
        setNotas(data)
        setIsPeding(false)
      })
  }, [])
  // o array vazio [] faz com o ele só execute uma vez, ou colocando uma variável dentro,  só quando essa variável mudar

  return (
    <div className="App">
      <Settings />
      <div className="notas">
        {isPending && <div>Loading...</div>}
        {notas && <Nota notas={notas} filtro={true} handleDelete={handleDelete} />}
        {notas && <Nota notas={notas} filtro={false} handleDelete={handleDelete} />}
      </div>
    </div>
  );
}

export default PagNotas;
