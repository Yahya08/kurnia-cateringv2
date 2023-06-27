import "./Component CSS/Home2.css"
import { Link } from "react-router-dom";

import Gmbr from ".././assets/Img/Card/png1.png"
function Home2() {
  return (
    <div className="home2">
        <div className="subhome2">
          <div className="home2-txt">
            <h2>Kurnia Catering <span>Nih bos</span></h2>
            <p>Dengan melayani askaakhkahsdshdjkhsdxcx
                jhg
            </p>
            <Link to={"/reserfasi"}>Hubungi</Link>
            {/* <a href="">Kunjungi</a> */}
          </div>
          <div className="imgg">
            <img className="img-home2" src={Gmbr} alt="" />

          </div>
        </div>
    </div>
  )
}

export default Home2