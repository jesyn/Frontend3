import {useState} from 'react'

function App() {
  const [listaFrutas, setListaFrutas] = useState(["Manzana", "Pera", "Banana"])
  const [loading, setLoading] = useState(false)


    const agregarFruta = (e) => {
      e.preventDefault()
      let nuevaFruta = e.target.nuevaFruta.value
      setLoading(true)
      setTimeout(() => {
        setListaFrutas([...listaFrutas, nuevaFruta])
        setLoading(false)
      }, 2000)
      e.target.nuevaFruta.value = ""
    }
    

    return (
      <div>
        <h1>Frutas</h1>
        <ul>
          {listaFrutas.map((fruta, i) => {
            return <li key={i}>{fruta}</li>;
          })}
        </ul>
        <form onSubmit={agregarFruta}>
          <input name="nuevaFruta" type="text" /> 
          <br />
          <button disabled={loading}>Añadir nueva fruta </button>
          <br />
          <span>{loading && " añadiendo fruta..."}</span>
        </form>
      </div>
    );
}

export default App;
