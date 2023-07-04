import "./Component CSS/Page1.css";
import backg from ".././assets/Img/Card/backgrounfix2.jpg";
import Gmbr from ".././assets/Img/Card/png1.png";
import AOS from "aos";
import { useEffect } from "react";


function Page1() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();

  
},[]
  );
  
  return (
    <div className="home">
      <img className="backhome" src={backg} alt="" />
      <div className="subhome">
        <div className="color-page">
        <div className="home-txt">
        <p>Selamat Datang di</p>
        <h1>Kurnia catering</h1>
        {/* <h3>Siap melayai acara Anda</h3> */}
        </div>
        </div>
        <div className="img-homee">
        <div className="img-homee4"></div>
          <img data-aos="fade-up" className="img-home" src={Gmbr} alt="" />
        <div className="img-homee2"></div>
        <div className="img-homee3"></div>
        <div className="img-homee4"></div>
        <div className="img-homee5"></div>

        </div>
      </div>
    </div>
  );
}

export default Page1;
