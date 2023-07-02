import Home from './Component/Home'
import Reservasi from './Component/Reservasi'
import Page3 from './Component/Page3'
import Tentang from './Component/Tentang'
// import Reserfasi from './Component/Reserfasi'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
function App() {
 
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/reservasi' element={<Reservasi/>} />
        <Route path='/menu' element={<Page3/>} />
        <Route path='/tentang' element={<Tentang/>} />
        <Route path='/reservasi' element={<Reservasi/>} />

      </Routes>
    </Router>
    </>
  )
}

export default App

