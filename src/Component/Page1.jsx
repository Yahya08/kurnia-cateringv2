import "./Component CSS/Page1.css";
import backg from ".././assets/Img/Card/backgrounfix2.jpg";

import Gmbr from ".././assets/Img/Card/png1.png";
// import { Link } from "react-router-dom";

// import Subpage1 from "./Subpage1"

function Page1() {
  return (
    <div className="home">
      <img className="backhome" src={backg} alt="" />
      <div className="subhome">
        <div className="color-page">

        <div className="home-txt">
        <p>Selamat Datang di</p>
        <h1>Kurnia catering</h1>
        <h3>Siap melayai acara Anda</h3>
        </div>

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
