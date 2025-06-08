import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import HomePage from "./Pages/home"
import { Footer } from "./components/footer"
import Contact from "./Pages/contact"
import About from "./Pages/about-us"
import Services from "./Pages/services"
import Gallery from "./Pages/gallery"

const App = () => {
  return (
    <div className="bg-white">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/gallery' element={<Gallery/>} />
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App