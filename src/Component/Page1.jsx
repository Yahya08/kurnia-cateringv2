import "./Component CSS/Page1.css";
import Gmbr from ".././assets/Img/Card/png1.png";
// import { Link } from "react-router-dom";

// import Subpage1 from "./Subpage1"
// import Back from "../assets/Img/Makanan.jpg";

function Page1() {
  return (
    <div className="home">
      <div className="subhome">
        <div className="home-txt">
          <ul className="font-ul">
          <li> <span>Catering</span></li>
          </ul>
          <h2>
            Kurnia Catering <span>Nih bos</span>
          </h2>
          <p>Dengan melayani askaakhkahsdshdjkhsdxcx jhg</p>
          <a href="">Kunjungi</a>

        </div>
        <div className="img-homee">
        <div className="img-homee4"></div>
          <img className="img-home" src={Gmbr} alt="" />
        <div className="img-homee2"></div>
        <div className="img-homee3"></div>
        <div className="img-homee4"></div>
        <div className="img-homee5"></div>

        {/* <div className="img-homee6"></div> */}
        
        </div>
      </div>
    </div>
  );
}

export default Page1;
