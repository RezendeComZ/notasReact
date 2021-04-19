import Settings from "./settings";
import "./stylesheets/style.css";
import { useState } from "react"

function PagNotas() {
  // const titulo = "Notas"

  const [notas, setnotas] = useState([
    {title: 'Uma nota', body: "a primeira nota", nota_id: 1, pin: false},
    {title: 'Outra nota', body: "a segunda", nota_id: 2, pin: false},
    {title: 'Uma fixa nota', body: "a terceira", nota_id: 3, pin: false},
  ])
  return (
    <div className="App">
    <Settings/>
    <div className="notas">
      {notas.map( (nota) => 
        (
          <div className={"postit pin" + nota.pin} id={nota.nota_id}>
            <div className="headPost">
              {nota.title}
            </div>
            <div class="bodyPost">
              {nota.body}
            </div>
          </div>
        )
      )}
    </div>
    </div>
  );
}

export default PagNotas;
