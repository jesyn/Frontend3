import './App.css';
import User from './components/Users.json'
import { useState } from 'react';
import Header from './components/Header';
import Cards from './components/Cards';




function App() {
  const [personaje, setPersonaje] = useState(
  {
    superhero:"",
    publisher:"",
    alter_ego:"",
    first_appearance:"",
    characters:""
  })

  return (
    <div>
      <Header personaje={personaje}/>
      <Cards lista={User} setPersonaje={setPersonaje}/>
    </div>
  );
}

export default App;
