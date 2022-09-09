
import {Routes, Route} from 'react-router-dom'
import "./App.css"
// Componentes
import Home from './components/Home'
import Login from './components/Login'
import Product from './components/Product'
import Navbar from './components/Navbar.js'
import NotFound from './components/NotFound.js'

function App() {

    return (
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/product/:product" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    )
}

export default App;