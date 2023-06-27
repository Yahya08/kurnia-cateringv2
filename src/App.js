import Home from './Component/Home'
import Reserfasi from './Component/Reserfasi'
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
        <Route path='/reserfasi' element={<Reserfasi/>} />
        <Route path='/menu' element={<Page3/>} />
        <Route path='/tentang' element={<Tentang/>} />
        {/* <Route path='/reserfasi' element={<Reserfasi/>} /> */}

      </Routes>
    </Router>
    </>
  )
}

export default App

