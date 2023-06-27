import "../Component/Component CSS/Zenn.css";
import Img from "../assets/Img/Card/2b28d9c2-703d-4430-a653-3c971bdf0ce4.jpg";
import Promo from "../assets/Img/Card/png1.png";
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
            <img className="card-img" src={Img} alt="" />
            <div className="card-text">
              <h1 className="menu-judul">Judul</h1>
              <p className="deskripsi-judul">Blablabla</p>
            </div>
          </div>
          <div className="card-makanan">
            <img className="card-img" src={Img} alt="" />
            <div className="card-text">
              <h1 className="menu-judul">Judul</h1>
              <p className="deskripsi-judul">Blablabla</p>
            </div>
          </div>
          <div className="card-makanan">
            <img className="card-img" src={Img} alt="" />
            <div className="card-text">
              <h1 className="menu-judul">Judul</h1>
              <p className="deskripsi-judul">Blablabla</p>
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
                <h1 className="judul-anim">Judull</h1>
                <p className="text-anim">aku juga mau</p>
                <p className="text-anim">Hubungi kami </p>
              </div>
              <img className="promo-img" src={Promo} alt="" />
            </div>
            {/* Page Promo */}

            <div className="page5kanan">
              <div className="kananfoto1">
                <img className="promokanan" src={Promo} alt="" />
                <div className="kanandeskripsi">
                  <h1 className="h1-detail">Haloo</h1>
                </div>
                <div className="desdeta">
                  <Link className="hub-btn" to={"/reserfasi"}>
                    Hubungi Kami
                  </Link>
                
                  <div className="detail">
                    <h1 className="h1-detail1">Nasi lemak</h1>
                    <p className="h1-detail1">Nasilemak untuk awokawok</p>
                    <h2 className="h1-detail1">
                      Harga <span>20K</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="kananfoto1">
                <img className="promokanan" src={Promo} alt="" />
                <div className="kanandeskripsi">
                  <h1 className="h1-detail">Pecel Lele</h1>
                </div>
                <div className="desdeta">
                  <Link className="hub-btn" to={"/reserfasi"}>
                    Hubungi Kami
                  </Link>

                  <div className="detail">
                    <h1 className="h1-detail1">Nasi lemak</h1>
                    <p className="h1-detail1">Nasilemak untuk awokawok</p>
                    <h2 className="h1-detail1">
                      Harga <span>20K</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="kananfoto1">
                <img className="promokanan" src={Promo} alt="" />
                <div className="kanandeskripsi">
                  <h1 className="h1-detail">Haloo</h1>
                </div>
                <div className="desdeta">
                  <Link className="hub-btn" to={"/reserfasi"}>
                    Hubungi Kami
                  </Link>

                  <div className="detail">
                    <h1 className="h1-detail1">Nasi lemak</h1>
                    <p className="h1-detail1">Nasilemak untuk awokawok</p>
                    <h2 className="h1-detail1">
                      Harga <span>20K</span>
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
