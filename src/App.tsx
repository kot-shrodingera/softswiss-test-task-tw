import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Info from './components/Info'
import Offers from './components/Offers'

function App() {
  return (
    <div className="bg-darkBlue font-extrabold text-white">
      <Header />
      <Hero />
      <div className="container flex flex-col gap-[50px] py-[50px] md:gap-[55px] md:py-[55px] lg:gap-[60px] lg:py-[60px]">
        <Offers />
        <Info />
      </div>
      <Footer />
    </div>
  )
}

export default App
