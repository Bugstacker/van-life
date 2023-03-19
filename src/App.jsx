import React from "react"
import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import "./App.css"

import Home from "./pages/Home"
import About from "./pages/About"

function App() {
  return (

    <BrowserRouter>
      <header className="header">
        <Link className="logo" to="/">#VANLIFE</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to={"/vans"}>Vans</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/about" element={ <About /> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App