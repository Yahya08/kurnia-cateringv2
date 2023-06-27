import "./Component CSS/Tentang.css"
import Footer from "../assets/Footer"
import Navbar from "../assets/Navbar"
// import Tim from "./Tim.jsx"
import Page_tentang from "./Sub Component/Page_tentang"
function Tentang() {
  return (
    <div className="tentang">
      <div className="tentang-nav">

      </div>

      <Navbar/>
      <div className="tentang-body">
      <Page_tentang/>
        {/* <Tim/> */}
      </div>
      <Footer/>
    </div>
  )
}

export default Tentang