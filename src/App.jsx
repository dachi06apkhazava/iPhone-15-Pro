import Navbar from "./components/navbar"
import Highlights from "./components/highlights"
import Hero from "./components/hero"
import Model from "./components/model"
import Features from './components/features';
import HowItWorks from './components/howItWorks';
import Footer from './components/footer';
import Zoom from './components/Zoom';


const App = () => {
  return (
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Features />
      <Model/>
      <HowItWorks />
      <Footer />
    </main>
  )
}

export default App
