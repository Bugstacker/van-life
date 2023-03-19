import React from "react"
import heroImg from "../assets/profile.png"
import { Link } from "react-router-dom"
import "./About.css"
import Footer from "./Footer"

function About() {
  return (
    <>
      
      <div className="about-img">
        <img src={heroImg} alt="A man sitting on a van at Night" />
      </div>
      <main className="about-page">
        <h1 className="about-title">Don’t squeeze in a sedan when you could relax in a van.</h1>

        <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
        (Hitch costs extra 😉)
        <br/>
        <br/>
        Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>

        <div className="about-card">
          <h4>Your destination is waiting.
          Your van is ready.</h4>
          <Link className="about-card--cta" to="/vans">explore our vans</Link>
        </div>
      </main>
      <Footer />
    </>
    

  )
}

export default About