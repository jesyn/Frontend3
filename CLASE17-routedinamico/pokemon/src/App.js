import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PokeList from "./components/Pokelist";
import Type from "./components/Type";
import Pokemon from "./components/Pokemon";
import NotFound from "./components/NotFound";
import TypeView from "./components/TypeView";

function App() {


    return (
      <div>
        <Routes>
            <Route path='/' element={<Home/>}>
                <Route path='/pokemon' element={<PokeList/>}>
                    <Route path=':pokeName' element={<Pokemon/>}/>
                </Route>
                <Route path='/type' element={<Type/>}>
                    <Route path=':pokeType' element={<TypeView/>}/>
                </Route>
            </Route>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    );
}

export default App;