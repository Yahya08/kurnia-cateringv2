import "../Component CSS/Page3.css";
import Img from "../../assets/Img/Card/Resep Nasi Uduk Betawi yang Maknyus & Enyoi.jpg";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

function Page3_1() {
  
  const [menuData, setMenuData] = useState([]);
  const fetchMenuData = () => {
    axios
    .get('http://localhost:5000/dataMenu', {
    })
      .then((response) => {
          setMenuData(response.data);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan dalam permintaan API: ", error);
      });
  };

  const arrayBufferToBase64 = (buffer) => {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  useEffect(() => {
    fetchMenuData();
  }, []);

  return (
    <div className="menu-page3">
      <div className="judul-pg3">
        <h1 className="judulpg3-1">Hidangan Pembuka</h1>
        <p>
          Hidangan pembuka adalah cara pertama untuk memulai perjalanan kuliner
          Anda.
          <br /> Kami dengan bangga menyajikan sebuah hidangan yang menggoda dan
          memberikan sentuhan <br />
          pertama yang tidak terlupakan
        </p>
      </div>
      <div className="stylee-pg3">
        <div className="style-page3">
          {menuData.map((item) => {
            const base64Image = arrayBufferToBase64(item.gambar.data);
            const imageURL = `data:${item.gambar.contentType};base64,${base64Image}`;
            return (
              <div key={item.id_menu} className="card-page3">
                <img className="img-page3" src={imageURL} alt="" />
                <div className="card-text3">
                  <h1 className="menu-judul-pg3">{item.nama}</h1>
                  <p className="deskripsi-judul-pg3">{item.deskripsi}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="style-page3">
          <div className="card-page3">
            <img className="img-page3" src={Img} alt="" />
            <div className="card-text3">
              <h1 className="menu-judul-pg3">Roll Cake</h1>
              <p className="deskripsi-judul-pg3">Blablabla</p>
            </div>
          </div>
          <h1 className="page3-judull">Roll Cake</h1>
        </div>
        <div className="style-page3">
          <div className="card-page3">
            <img className="img-page3" src={Img} alt="" />
            <div className="card-text3">
              <h1 className="menu-judul-pg3">Dim Sum</h1>
              <p className="deskripsi-judul-pg3">Blablabla</p>
            </div>
          </div>
          <h1 className="page3-judull">Dim Sum</h1>
        </div>
      </div>
      <div className="judul-pg3">
        <h1 className="judulpg3-1">Hidangan Pembuka</h1>
        <p>
          Hidangan pembuka adalah cara pertama untuk memulai perjalanan kuliner
          Anda.
          <br /> Kami dengan bangga menyajikan sebuah hidangan yang menggoda dan
          memberikan sentuhan <br />
          pertama yang tidak terlupakan
        </p>
      </div>
      <div className="stylee-pg3">
        <div className="style-page3">
          <div className="card-page3">
            <img className="img-page3" src={Img} alt="" />
            <div className="card-text3">
              <h1 className="menu-judul-pg3">Risol</h1>
              <p className="deskripsi-judul-pg3">Blablabla</p>
            </div>
          </div>

          <h1 className="page3-judull">Risol</h1>
        </div>
        <div className="style-page3">
          <div className="card-page3">
            <img className="img-page3" src={Img} alt="" />
            <div className="card-text3">
              <h1 className="menu-judul-pg3">Roll Cake</h1>
              <p className="deskripsi-judul-pg3">Blablabla</p>
            </div>
          </div>
          <h1 className="page3-judull">Roll Cake</h1>
        </div>
        <div className="style-page3">
          <div className="card-page3">
            <img className="img-page3" src={Img} alt="" />
            <div className="card-text3">
              <h1 className="menu-judul-pg3">Dim Sum</h1>
              <p className="deskripsi-judul-pg3">Blablabla</p>
            </div>
          </div>
          <h1 className="page3-judull">Dim Sum</h1>
        </div>
      </div>
      <div className="judul-pg3">
        <h1 className="judulpg3-1">Hidangan Pembuka</h1>
        <p>
          Hidangan pembuka adalah cara pertama untuk memulai perjalanan kuliner
          Anda.
          <br /> Kami dengan bangga menyajikan sebuah hidangan yang menggoda dan
          memberikan sentuhan <br />
          pertama yang tidak terlupakan
        </p>
      </div>
      <div className="stylee-pg3">
        <div className="style-page3">
          <div className="card-page3">
            <img className="img-page3" src={Img} alt="" />
            <div className="card-text3">
              <h1 className="menu-judul-pg3">Risol</h1>
              <p className="deskripsi-judul-pg3">Blablabla</p>
            </div>
          </div>

          <h1 className="page3-judull">Risol</h1>
        </div>
        <div className="style-page3">
          <div className="card-page3">
            <img className="img-page3" src={Img} alt="" />
            <div className="card-text3">
              <h1 className="menu-judul-pg3">Roll Cake</h1>
              <p className="deskripsi-judul-pg3">Blablabla</p>
            </div>
          </div>
          <h1 className="page3-judull">Roll Cake</h1>
        </div>
        <div className="style-page3">
          <div className="card-page3">
            <img className="img-page3" src={Img} alt="" />
            <div className="card-text3">
              <h1 className="menu-judul-pg3">Dim Sum</h1>
              <p className="deskripsi-judul-pg3">Blablabla</p>
            </div>
          </div>
          <h1 className="page3-judull">Dim Sum</h1>
        </div>
      </div>
    </div>
  );
}

export default Page3_1;
