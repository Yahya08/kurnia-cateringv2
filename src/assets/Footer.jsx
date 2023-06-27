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
          <p>Didirikan pada tahun 2020 dan sekarang sudah bangkrut</p>
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
            <li><a href="">Amalina Nur Sabrina 21.11.4334</a></li>
            <li><a href="">Aviva Pradasyah 21.11.4335</a></li>
            <li><a href="">Taufiq Dwi Aziz 21.11.4342</a></li>
            <li><a href="">Yahya Handa Restanto 21.11.4365</a></li>
           
          </ul>
        </div>
        <div className="linkss">
          <h2>Tim</h2>
          <ul>
            <li><a href="">Angga Airul Rohman 21.11.4384</a></li>
            <li><a href="">Agus Kurniawan 21.11.4385</a></li>
            <li><a href="">Khoirudin Yoga Pratama 21.11.4389</a></li>
           

          </ul>
        </div>
        <div className="contact">
          <h2>Contact us</h2>
          <ul className="fot-info">
            <li>
              <span><AiOutlinePhone/></span>
              <p><a href="https://wa.me/6285870847511">+62 85870847511</a> </p>
            </li>
            <li>
              <span><FiMail/></span>
              <p><a href="mailto:kurniacatering2020@gmail.com">kurniacatering2020@gmail.com</a> </p>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Footer;
