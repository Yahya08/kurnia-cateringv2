import "./Component CSS/Page3.css"
import Page3_1 from "./Sub Component/Page3_1"
import Navbar from "../assets/Navbar"
import Footer from "../assets/Footer"
import Page1 from "./Page1"


function Page3() {
  return (
    <div className="slide-page3">
      <div className="slide-menu">
        <Navbar/>
        <div className="lay-menu">
        <Page1/>
        <Page3_1/>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default Page3