// import "./Component CSS/Page1.css";
import "../assets/assets CSS/Navbar.css";
import "./Component CSS/Reserfasi.css";
import { IoLogoWhatsapp } from "react-icons/io";
import {FiMail} from "react-icons/fi";



function Font() {
  return (
    <div className="body-reser">
      <div className="hubung">
        <div className="text-reservasi">
          <h2>Get In Contact</h2>
        </div>
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
              <h2 className="contch2">Contact Info</h2>
              <ul>
                <li>
                   <FiMail className="icn-ress"/>
                  <a href="https://wa.me/6285712872931">Email
                  <p>0</p>
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
              

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Font;
