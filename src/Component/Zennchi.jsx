import "../Component/Component CSS/Zenn.css";
import Img from "../assets/Img/Card/2b28d9c2-703d-4430-a653-3c971bdf0ce4.jpg";
import Promo from "../assets/Img/Card/png1.png";
import rendang from "../assets/Img/Card/rendang.jpeg";
import gulai from "../assets/Img/Card/gulai-Riau.jpg";
import mangut from "../assets/Img/Card/mangut.jpg";
import bakso from "../assets/Img/Card/bakso.png";
import barbaque from"../assets/Img/Card/barbecue.png";
import { Link } from "react-router-dom";
function Zennchi() {
  return (
    <div className="bodyzeen">
      <div className="judul-pg">
        <h1 className="judulpd-h1">Kami juga Meyediakan</h1>
        <h1 className="judulpd-h1">Beberapa Jenis Makanan</h1>
       
        <div className="style">
         
        <div className="swipe">
          
          <div className="card-makanan">
            <img className="card-img" src={mangut} alt="" />
            <div className="card-text">
              <h1 className="menu-judul">Mangut</h1>
              <p className="deskripsi-judul">Makanan Khas Daerah Pati</p>
            </div>
          </div>
          <div className="card-makanan">
            <img className="card-img" src={rendang} alt="" />
            <div className="card-text">
              <h1 className="menu-judul">Rendang</h1>
              <p className="deskripsi-judul">Makanan Khas Daerah Padang </p>
            </div>
          </div>
          <div className="card-makanan">
            <img className="card-img" src={gulai} alt="" />
            <div className="card-text">
              <h1 className="menu-judul">Gulai Udang</h1>
              <p className="deskripsi-judul">Makanan Khas Derah Riau </p>
            </div>
          </div>
        </div>
        <div className="swipe-pos">
          <Link className="btn-swp" to={"/menu"}> <br />Swipe Next </Link>
        </div>
        </div>

        <div className="page5slide">
         
          {/* <h1 className="judulpa?ge5slide">judul</h1> */}
          <div className="sideside">
            <div className="card-anim">
              <div className="cardanimimg">
                <div className="card-animdes">

                <h1>Cobain Beberapa Hidangan </h1>
                <h1>Yang Kami Tawarkan </h1>
                <h2>Dijamin</h2>

                <h1 className="card-p">P<span className="spanp">uas !!</span></h1>

                </div>
              </div>
              <div className="deskripsipromo">
                <h1 className="judul-anim">AYAM GEPREK</h1>
                <p className="text-anim">Dengan Daging Ayam Yang Pasti Halal </p>
                <p className="text-anim1">Hubungi kami </p>
              </div>
              <img className="promo-img" src={Promo} alt="" />
            </div>
            {/* Page Promo */}

            <div className="page5kanan">
              <div className="kananfoto1">
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
              <div className="kananfoto1">
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
              <div className="kananfoto1">
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
