import AboutUs from "./components/about-us"
import HeroSection from "./components/hero-section"
import Marquee from "./components/marquee"
import Navbar from "./components/navbar/Navbar"

const App = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroSection />
      <Marquee />
      <AboutUs />
      <div className="h-96"></div>
    </div>
  )
}

export default App