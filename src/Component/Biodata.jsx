
import "./Component CSS/Biodata.css"
import Amalina from "../assets/Img/Tim/Lina.jpg"
import Aviva from "../assets/Img/Tim/Tim/Aviva.JPG"
import Jeje from "../assets/Img/Tim/Jeje.jpg"
import Angga from "../assets/Img/Tim/Tim/Angga.jpg"
import Yahya from "../assets/Img/Tim/Tim/Yahya.png"
import Agus from "../assets/Img/Tim/Tim/Aguss.jpg"
import Taufik from "../assets/Img/Tim/Taufik.JPG"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";

function Font() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    
      
    },[]
      );
  return (
    <div className="biodata">
     <div className="biodata-scroll">

    
     <div data-aos="fade-right" className="biodata-pos">

        <div className="wrapper"> 
            <div data-aos="zoom-in-up" className="card-back">
                <div className="back-face">
                    <img className="icon.png" src={Jeje} alt="" />
                    <div className="info">
                        <div className="title">Khoirudin Yoga P</div>
                        <p>21.11.4389</p>
                    </div> 
                    <ul>
                        <a href="https://github.com/KhoirudinYoga"><AiFillGithub className="biodata-icon-github"/></a>
                        <a href="https://wa.me/6282387389780"><IoLogoWhatsapp className="biodata-icon-whatsapp"/></a>
                        <a href="https://instagram.com/khoirudin.yoga"><AiFillInstagram className="biodata-icon-instagram"/></a>
                        <a href="#"><FaFacebook className="biodata-icon"/></a>
                    
                    </ul>
                </div>    
            </div>
            
        </div>
        <div data-aos="zoom-in-up" className="wrapper"> 
            <div className="card-back">
                <div className="back-face">
                    <img className="icon.png" src={Aviva} alt="" />
                    <div className="info">
                        <div className="title">Aviva Pradasyah</div>
                        <p>21.11.4335</p>
                    </div> 
                    <ul>
                        <a href="https://github.com/Avivapradasyah"><AiFillGithub className="biodata-icon-github"/></a>
                        <a href="https://wa.me/6282350750276"><IoLogoWhatsapp className="biodata-icon-whatsapp"/></a>
                        <a href="https://instagram.com/avivapradasyahh"><AiFillInstagram className="biodata-icon-instagram"/></a>
                        <a href="#"><FaFacebook className="biodata-icon"/></a>
                    
                    </ul>
                </div>    
            </div>
            
        </div>
        <div data-aos="zoom-in-up" className="wrapper"> 
            <div className="card-back">
                <div className="back-face">
                    <img className="icon.png" src={Angga} alt="" />
                    <div className="info">
                        <div className="title">Angga Airul R</div>
                        <p>21.11.4384</p>
                    </div> 
                    <ul>
                        <a href="https://github.com/anggaarl"><AiFillGithub className="biodata-icon-github"/></a>
                        <a href="https://wa.me/6285700005003"><IoLogoWhatsapp className="biodata-icon-whatsapp"/></a>
                        <a href="https://instagram.com/anggaarl_"><AiFillInstagram className="biodata-icon-instagram"/></a>
                        <a href="#"><FaFacebook className="biodata-icon"/></a>
                    
                    </ul>
                </div>    
            </div>
            
        </div>
        <div data-aos="zoom-in-up" className="wrapper"> 
            <div className="card-back">
                <div className="back-face">
                    <img className="icon.png" src={Agus} alt="" />
                    <div className="info">
                        <div className="title">Agus Kurniawan</div>
                        <p>21.11.4385</p>
                    </div> 
                    <ul>
                        <a href="https://github.com/agus4385"><AiFillGithub className="biodata-icon-github"/></a>
                        <a href="https://wa.me/6285870847511"><IoLogoWhatsapp className="biodata-icon-whatsapp"/></a>
                        <a href="https://instagram.com/ini.agusss"><AiFillInstagram className="biodata-icon-instagram"/></a>
                        <a href="#"><FaFacebook className="biodata-icon"/></a>
                    
                    </ul>
                </div>    
            </div>
            
        </div>
            <div data-aos="zoom-in-up" className="wrapper"> 
            <div className="card-back">
                <div className="back-face">
                    <img className="icon.png" src={Amalina} alt="" />
                    <div className="info">
                        <div className="title">Amalina Nur S</div>
                        <p>21.11.4334</p>
                    </div> 
                    <ul>
                        <a href="https://github.com/amalina30"><AiFillGithub className="biodata-icon-github"/></a>
                        <a href="https://wa.me/6285712872931"><IoLogoWhatsapp className="biodata-icon-whatsapp"/></a>
                        <a href="https://instagram.com/amalina___ns"><AiFillInstagram className="biodata-icon-instagram"/></a>
                        <a href="#"><FaFacebook className="biodata-icon"/></a>
                    
                    </ul>
                </div>    
            </div>
            
        </div>
        <div data-aos="zoom-in-up" className="wrapper"> 
            <div className="card-back">
                <div className="back-face">
                    <img className="icon.png" src={Taufik} alt="" />
                    <div className="info">
                        <div className="title">Taufiq Dwi Aziz</div>
                        <p>21.11.4342</p>
                    </div> 
                    <ul>
                        <a href="https://github.com/taufiqdaziz"><AiFillGithub className="biodata-icon-github"/></a>
                        <a href="https://wa.me/6285868900924"><IoLogoWhatsapp className="biodata-icon-whatsapp"/></a>
                        <a href="https://instagram.com/taufiqdwiaziz"><AiFillInstagram className="biodata-icon-instagram"/></a>
                        <a href="#"><FaFacebook className="biodata-icon"/></a>
                    
                    </ul>
                </div>    
            </div>
            
        </div>
        <div data-aos="zoom-in-up" className="wrapper"> 
            <div className="card-back">
                <div className="back-face">
                    <img className="icon.png" src={Yahya} alt="" />
                    <div className="info">
                        <div className="title">Yahya Handa R</div>
                        <p>21.11.4365</p>
                    </div> 
                    <ul>
                        <a href="https://github.com/Yahya08"><AiFillGithub className="biodata-icon-github"/></a>
                        <a href="https://wa.me/6282248655686"><IoLogoWhatsapp className="biodata-icon-whatsapp"/></a>
                        <a href="https://instagram.com/yahyahnda_"><AiFillInstagram className="biodata-icon-instagram"/></a>
                        <a href="#"><FaFacebook className="biodata-icon"/></a>
                    
                    </ul>
                </div>    
            </div>
            
        </div>
        </div>

        </div>
    </div>
  );
}

export default Font;