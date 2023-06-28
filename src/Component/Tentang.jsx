import "./Component CSS/Tentang.css"
import Footer from "../assets/Footer"
import Navbar from "../assets/Navbar"
import Datadiri from "./Datadiri"
import Biodata from "./Biodata"
import Page_tentang from "./Sub Component/Page_tentang"
function Tentang() {
  return (
    <div className="tentang">
      <div className="tentang-nav">

      </div>

      <Navbar/>
      <div className="tentang-body">
      <Page_tentang/>
      <Datadiri/>
      <Biodata/>
      </div>
      <Footer/>
      
    </div>
  )
}

export default Tentang