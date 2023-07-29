// import './App.css'
// import NavBarComp from './Components/Navbar'
// import RamenShopBannerComp from './Components/RamenShopBanner'



// function App() {

//   return (
//     <>
//       <NavBarComp />
//       <RamenShopBannerComp />
//     </>
//   )
// }

// export default App

import React from "react"
import Info from "./components/Info"
import About from "./Components/About"
import Interest from "./components/Interest"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="container">
      <div className="bg">
      </div>
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  )
}