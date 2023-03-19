import React from "react"
import { Link } from "react-router-dom"
import "./Home.css"
import Footer from "./Footer"

function Home() {
  return (
    <>
    <main className="home-page">
      <h1 className="home-title">You got the travel plans, we got the travel vans.</h1>
      <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>

      <Link className="home-cta" to={"/vans"}>Find your van</Link>
    </main>
    <Footer />
    </>
    
  )
}

export default Home