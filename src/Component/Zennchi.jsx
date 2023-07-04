import "../Component/Component CSS/Zenn.css";
import Promo from "../assets/Img/Card/png1.png";
import mangut from "../assets/Img/Card/mangut.jpg";
import apetizer from  "../assets/Img/Card/apetizer.jpg";
import jelly from "../assets/Img/Card/jelly.jpeg";
import bakso from "../assets/Img/Card/bakso.png";
import barbaque from"../assets/Img/Card/barbecue.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Zennchi() {
  useEffect(() => {
      AOS.init({

        duration: 800
      }
        );
      AOS.refresh();
    

  },[]
);

  return (
    <div className="bodyzeen">
      <div  className="judul-pg">
        <h1 data-aos="fade-right" className="judulpd-h1">Kami juga Meyediakan</h1>
        <h1 data-aos="fade-right" className="judulpd-h1">Beberapa Jenis Makanan</h1>
        <div data-aos="zoom-in" className="style">
        <div className="swipe">
          <div  data-aos="fade-right" className="card-makanan">
            <img className="card-img" src={apetizer} alt="" />
            <div className="card-text">
              <h1 className="menu-judul">Apetizer</h1>
              <p className="deskripsi-judul">Italian food</p>
            </div>
          </div>
          <div data-aos="fade-up" className="card-makanan">
            <img className="card-img" src={mangut} alt="" />
            <div className="card-text">
              <h1 className="menu-judul">Mangut</h1>
              <p className="deskripsi-judul">Makanan Khas Daerah Pati </p>
            </div>
          </div>
          <div  data-aos="fade-left" className="card-makanan">
            <img className="card-img" src={jelly} alt="" />
            <div className="card-text">
              <h1 className="menu-judul">Jelly Buah</h1>
              <p className="deskripsi-judul">Rasa Strawberry Fruit </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-right" className="swipe-pos">
          <Link className="btn-swp" to={"/menu"}> <br />Swipe Next </Link>
        </div>
        </div>
        <div className="page5slide">
          <div className="sideside">
            <div data-aos="zoom-in" className="card-anim">
              <div className="cardanimimg">
                <div className="card-animdes">
                <h1>Cobain Beberapa Hidangan </h1>
                <h1>Yang Kami Tawarkan </h1>
                <h2>Dijamin</h2>
                <h1 className="card-p">P<span className="spanp">uas !!</span></h1>
                </div>
              </div>
              <div data-aos="zoom-in-left" className="deskripsipromo">
                <h1 className="judul-anim">AYAM GEPREK</h1>
                <p className="text-anim">Dengan Daging Ayam Yang Pasti Halal </p>
                <p className="text-anim1">Hubungi kami </p>
              </div>
              <img  className="promo-img" src={Promo} alt="" />
            </div>
            {/* Page Promo */}

            <div className="page5kanan">
              <div data-aos="zoom-in-left" className="kananfoto1">
                <img className="bakso" src={bakso} alt="" />
                <div className="kanandeskripsi">
                  <h1 className="h1-detail">Bakso Ceker</h1>
                </div>
                <div className="desdeta">
                  <Link className="hub-btn" to={"/reserfasi"}>
                    Hubungi Kami
                  </Link>
                
                  <div className="detail">
                    <h1 className="title">Bakso Ceker</h1>
                    <p className="h1-detail1">Bakso Dari Daging Asli Dan Diolah Dengan Higienis</p>
                    <h2 className="harga">
                      Harga <span>Rp20-Rp30</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in-left" className="kananfoto1">
                <img className="bakso" src={barbaque} alt="" />
                <div className="kanandeskripsi">
                  <h1 className="h1-detail">Barbacue</h1>
                </div>
                <div className="desdeta">
                  <Link className="hub-btn" to={"/reserfasi"}>
                    Hubungi Kami
                  </Link>

                  <div className="detail">
                    <h1 className="title">Barbacue</h1>
                    <p className="h1-detail1">Dengan Daging Pilihan & Berkualitas </p>
                    <h2 className="harga">
                      Harga <span>Rp40 - Rp45</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in-left" className="kananfoto1">
                <img className="promokanan" src={Promo} alt="" />
                <div className="kanandeskripsi">
                  <h1 className="h1-detail">Ayam Geprek</h1>
                </div>
                <div className="desdeta">
                  <Link className="hub-btn" to={"/reserfasi"}>
                    Hubungi Kami
                  </Link>

                  <div className="detail">
                    <h1 className="title">Ayam Geprek</h1>
                    <p className="h1-detail1">Dengan Sambel Terasi Yang Pedas & Lezat </p>
                    <h2 className="harga">
                      Harga <span>Rp10 - Rp15</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Zennchi;
