import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Pokemon from './components/Pokemon'
import Navbar from './components/Navbar'
import Search from './components/Search'
import "./Styles/global.css"

const App = () => {
    return (
        <BrowserRouter>
          <Navbar />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/pokemon/search" element={<Search />} />
                  <Route path="/pokemon/:id" element={<Pokemon />} />
              </Routes>
        </BrowserRouter>
    )
}

export default App