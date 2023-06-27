import "./assets CSS/Footer.css";
import {FiMail} from "react-icons/fi";
import {
  AiOutlinePhone,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
// import Img from ".././assets/Img/Card/png1.png"
function Footer() {
  return (
    <div className="footer">
      <div className="fot-body">

     
      <div className="footer-con">
        <div className="abaout">
          <h2>About Us</h2>
          <p>Didirikan pada tahun 2019 dan sekarang masih berjalan</p>
          <ul className="fot-ul">
            <li>
              <a>
                <AiFillFacebook className="Ai" />
              </a>
            </li>
            <li>
              <a>
                <AiFillInstagram className="Ai"/>
              </a>
            </li>
            <li>
              <a>
                <AiOutlinePhone className="Ai"/>
              </a>
            </li>
          </ul>
        </div>
        <div className="linkss">
          <h2>Tim</h2>
          <ul>
            <li><a href="">Agus Kurniawan</a></li>
            <li><a href="">Agus Kurniawan</a></li>
            <li><a href="">Agus Kurniawan</a></li>
            <li><a href="">Agus Kurniawan</a></li>
           
          </ul>
        </div>
        <div className="linkss">
          <h2>Tim</h2>
          <ul>
            <li><a href="">Agus Kurniawan</a></li>
            <li><a href="">Agus Kurniawan</a></li>
            <li><a href="">Agus Kurniawan</a></li>
           

          </ul>
        </div>
        <div className="contact">
          <h2>Contact us</h2>
          <ul className="fot-info">
            <li>
              <span><AiOutlinePhone/></span>
              <p><a href="">+62 8587 0847 511</a> </p>
            </li>
            <li>
              <span><FiMail/></span>
              <p><a href="">namapenggunanyagus@gmail.com</a> </p>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Footer;
