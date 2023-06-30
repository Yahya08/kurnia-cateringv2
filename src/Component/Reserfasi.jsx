import "./Component CSS/Reserfasi.css";
import Navbar from "../assets/Navbar";
import { IoLogoWhatsapp } from "react-icons/io";
import {FiMail} from "react-icons/fi";
import Map from "../assets/Img/Card/map.PNG"
import Footer from "../assets/Footer";
function Reserfasi() {
  return (
    <div className="loginlagi">
      <div className="cont">

        <div className="div-nav">

        <Navbar/>
        </div>
        <div className="hubung">
        <div className="boxreservasi">
          <div className="contact-form">
            
            <form className="forn-container">
              <h2>Register</h2>
              <div className="name">
                <input type="text-login" placeholder="First Name" required />
                <input type="text-login" placeholder="Last Name" required />
              </div>
              <input type="email" placeholder="Email" required />
              <div className="name">
                <input type="text-login" placeholder="Number Phone" required />
                <input type="date" placeholder="Last Name" required />

              </div>
              <div className="massage">
                <textarea placeholder="Massage" ></textarea>
              </div>

              <button>Submit</button>
            </form>
          </div>
          <div className="contact-poss">
            <div className="contact-info">
              <ul>
                <li>
                   <FiMail className="icn-ress"/>
                  <a href="mailto:kurniacatering2020@gmail.com">Email
                  <p>kurniacatering2020@gmail.com</p>
                  </a>
                </li>
                <li>
                   <IoLogoWhatsapp className="icn-ress"/>
                  <a href="https://wa.me/6285712872931">WhatsApp
                  <p>085870847511</p>
                  </a>
                </li>
                
              
                
            
              </ul>
            </div>
            <div className="contact-map">
            <img className="map" src={Map} alt="" />
              
            </div>

          </div>
        </div>
      </div>
      </div>
          <Footer/>
        
      </div>
    
  );
}

export default Reserfasi;
