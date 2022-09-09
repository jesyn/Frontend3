import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PokeList from "./components/Pokelist";
import Type from "./components/Type";
import NotFound from "./components/NotFound";

function App() {


    return (
        <div>
            <Home />
            <Routes>
                <Route path='/' element={<h1>Home de prueba</h1>} />
                <Route path='/pokemon/*' element={<PokeList />} />
                <Route path='/type/*' element={<Type />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;