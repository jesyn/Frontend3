
import './App.css';
import {Routes , Route} from 'react-router-dom'
import Home from './components/Home';
import Gato from './components/Gato';
import Perro from './components/Perro';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}>
            <Route path='/Perros' element={<Perro />} />
            <Route path='/Gatos' element={<Gato />} />
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
