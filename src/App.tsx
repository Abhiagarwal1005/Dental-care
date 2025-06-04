import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import HomePage from "./Pages/home"
import { Footer } from "./components/footer"

const App = () => {
  return (
    <div className="bg-white">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          {/* <Route path='/contact' element={<Contact />} /> */}
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App