import "./Component CSS/Home2.css";
import { Link } from "react-router-dom";
import Back from "../assets/Img/Card/backgrounfix3.jpg";
import Gmbr from ".././assets/Img/Card/cheft.png";
function Home2() {
  return (
    <div className="home2">
      <img className="home2back" src={Back} alt="" />
      <div className="subhome2">

        <div className="home2-txt">
          <div className="home2-txt">
            <h1>Kurnia </h1>
            <h2>Catering</h2>
            <p>Ada beberapa hidangan yang kami tawarkan mulai dari <br/>hidangan pembuka
            hidangan utama sampai hidangan penutup</p>
          </div>
            <div className="pilih">
              <a href="./Sub Component/Page3_1.jsx">Lihat Menu</a>
              <Link to={"/reserfasi"}>Hubungi</Link>
            </div>
          {/* <a href="">Kunjungi</a> */}
        </div>
        <div className="imgg">
          
          <img className="img-home2" src={Gmbr} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home2;
