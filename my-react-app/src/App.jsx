import Navbar from "./Component/Navbar/Navbar"
import Hero from "./Component/Hero/Hero"
import Title from "./Component/Title/Title"
import About from "./Component/About/About"
import Services from "./Component/Services/Services"
import { ThemeProvider } from "./context/ThemeContext"
import Contact from "./Component/Contact/Contact"
function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <div id="home">
          <Hero />
        </div>
        <div id="about" className="section-wrapper">
          <Title subTitle="Welcome to" Title="Sherry's Beauty Salon" />
          <About />
        </div>
        <div id="services" className="section-wrapper services-section">
          <Services />
        </div>
        <div id="contact" className="section-wrapper contact-section">
          <Contact />
        </div> 
      </div>
    </ThemeProvider>
  )
}

export default App
