import Settings from "./settings";
import "./stylesheets/style.css";
import { useState } from "react"
import Nota from './Nota'

function PagNotas() {
  // const titulo = "Notas"

  const [notas, setnotas] = useState([
    { title: 'Uma nota', body: "a primeira nota", nota_id: 1, pin: false },
    { title: 'Outra nota', body: "a segunda", nota_id: 2, pin: false },
    { title: 'Uma fixa nota', body: "a terceira", nota_id: 3, pin: true },
  ])
  return (
    <div className="App">
      <Settings />
      <div className="notas">
        <Nota notas={notas} filtro={true} />
        <Nota notas={notas} filtro={false} />
      </div>
    </div>
  );
}

export default PagNotas;
