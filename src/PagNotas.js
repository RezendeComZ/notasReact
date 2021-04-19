import Settings from "./settings";
import "./stylesheets/style.css";
import { useState, useEffect } from "react"
import Nota from './Nota'

function PagNotas() {
  // const titulo = "Notas"

  const [notas, setNotas] = useState([
    { title: 'Uma nota', body: "a primeira nota", nota_id: 1, pin: false },
    { title: 'Outra nota', body: "a segunda", nota_id: 2, pin: false },
    { title: 'Uma fixa nota', body: "a terceira", nota_id: 3, pin: true },
  ])

  const handleDelete = (id) => {
    const novasNotas = notas.filter(nota => nota.nota_id !== id)
    setNotas(novasNotas)
  }

  useEffect(() => {
    console.log("use effect rodado");
    console.log(notas);
  }, [])
  // o array vazio [] faz com o ele só execute uma vez, ou colocando uma variável dentro,  só quando essa variável mudar


  return (
    <div className="App">
      <Settings />
      <div className="notas">
        <Nota notas={notas} filtro={true} handleDelete={handleDelete} />
        <Nota notas={notas} filtro={false} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default PagNotas;
