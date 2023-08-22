import React from "react"
import About from "./components/About"
import Footer from "./components/Footer"
import Info from "./components/Info"
import Interest from "./components/Interest"
import Projects from "./components/Projects"
export default function App() {
  return (
    <div className="container" style={{ maxWidth: "600px" }}>
      <div className="bg">
      </div>
      <Info />
      <Projects />
      <About />
      <Interest />
      <Footer />
    </div>
  )
}