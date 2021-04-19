const Nota = ({ filtro, notas }) => {
  notas = notas.filter(nota => nota.pin == filtro)
  return (
    <div className="notas">
      {notas.map((nota) =>
      (
        <div className={"postit pin" + nota.pin} id={nota.nota_id} key={nota.nota_id}>
          <div className="headPost">
            {nota.title}
          </div>
          <div class="bodyPost"   >
            {nota.body}
          </div>
        </div>
      )
      )}
    </div>
  );
}

export default Nota;