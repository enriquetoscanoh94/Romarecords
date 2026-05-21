import { AppProvider } from './context/AppContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <AppProvider>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </AppProvider>
  )
}
