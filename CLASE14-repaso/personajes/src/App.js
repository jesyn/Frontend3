import { useEffect, useState } from 'react';
import './App.css';
import styles from './styles/container.module.css'
import Character from './components/Character';

const endpoint = "https://rickandmortyapi.com/api/character/?page=";

function App() {
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [personajes, setPersonajes] = useState([])

  useEffect( () => {
    fetch(`${endpoint}${page}`)
    .then( (response) => response.json())
    .then( (data) => {
        console.log('page')
        setPersonajes(data.results)
        setLoading(false)
    })
}, [page])

  const handleNext = () => {
      setPage(page+1)
  }
  
  const handlePrevious = () => {
      if(page > 1){
        setPage(page-1)
      }
  }

  if(loading){
      return (
        <h4>Obteniendo informacion....</h4>
      )
  }

  return (
      <>
        <div className={styles.buttonbar}>
            <button onClick={handlePrevious}>Previo</button>
            <button onClick={handleNext}>Siguiente</button>
        </div>
        <div className={styles.container}>
          {personajes.map( (personaje) => <Character key={personaje.id} id={personaje.id} name={personaje.name} image={personaje.image} />)}
        </div>
      </>
  );
}

export default App;
