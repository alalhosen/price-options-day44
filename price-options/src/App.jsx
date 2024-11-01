import './App.css'
import Footer from './component/Footer/Footer'
// import DaisyNav from './component/DaisyNav.jsx/DaisyNav'
import NavBar from './component/NavBar.jsx/NavBar'
import PriceOptions from './component/PriceOptions/PriceOptions'

function App() {

  return (
    <>
    <NavBar></NavBar>
    {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-4xl bg-rose-400'>Vite + React</h1>
      <PriceOptions></PriceOptions>
<Footer></Footer>
    </>
  )
}

export default App
