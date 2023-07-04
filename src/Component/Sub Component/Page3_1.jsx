import "../Component CSS/Page3.css";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Page3_1() {
  const [menuData, setMenuData] = useState([]);
  const [data_utama, setDataUtama] = useState([]);
  const [data_penutup, setDataPenutup] = useState([]);
  const fetchMenuData = () => {
    axios
      .get("http://localhost:5000/dataMenu/hidangan_pembuka", {})
      .then((response) => {
        setMenuData(response.data);
        // setDataUtama(response.data);
        // setDataPenutup(response.data);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan dalam permintaan API: ", error);
      });

      axios
      .get("http://localhost:5000/dataMenu/hidangan_utama", {})
      .then((response) => {
        // setMenuData(response.data);
        setDataUtama(response.data);
        // setDataPenutup(response.data);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan dalam permintaan API: ", error);
      });

      axios
      .get("http://localhost:5000/dataMenu/hidangan_penutup", {})
      .then((response) => {
        // setMenuData(response.data);
        // setDataUtama(response.data);
        setDataPenutup(response.data);
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
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <div className="menu-page3">
      <div className="judul-pg3">
        <h1 data-aos="fade-up" className="judulpg3-1">Hidangan Pembuka</h1>
        <p className="menu-page" data-aos="zoom-in-up">
          Hidangan pembuka adalah cara pertama untuk memulai perjalanan kuliner
          Anda.
          <br /> Kami dengan bangga menyajikan sebuah hidangan yang menggoda dan
          memberikan sentuhan <br />
          pertama yang tidak terlupakan
        </p>
        <div className="stylee-pg3">
          <div data-aos="fade-up" className="style-page3">
            {menuData
              .map((item) => {
                const base64Image = arrayBufferToBase64(item.gambar.data);
                const imageURL = `data:${item.gambar.contentType};base64,${base64Image}`;
                return (
                  <div className="induk">
                    <div key={item.id_menu} className="card-page3">
                      <img data-aos="flip-left" className="img-page3" src={imageURL} alt="" />
                      <div className="card-text3">
                        <p className="deskripsi-judul-pg3">{item.deskripsi}</p>
                      </div>
                    </div>
                    <h1 className="page3-judull">{item.nama}</h1>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div className="judul-pg3">
        <h1 data-aos="fade-up" className="judulpg3-1">Hidangan Utama</h1>
        <p data-aos="zoom-in-up">
          Hidangan pembuka adalah cara pertama untuk memulai perjalanan kuliner
          Anda.
          <br /> Kami dengan bangga menyajikan sebuah hidangan yang menggoda dan
          memberikan sentuhan <br />
          pertama yang tidak terlupakan
        </p>
        <div className="stylee-pg3">
          <div data-aos="fade-up" className="style-page3">
            {data_utama
              .map((item) => {
                const base64Image = arrayBufferToBase64(item.gambar.data);
                const imageURL = `data:${item.gambar.contentType};base64,${base64Image}`;
                return (
                  <div className="induk">
                    <div key={item.id_menu} className="card-page3">
                      <img data-aos="flip-left" className="img-page3" src={imageURL} alt="" />
                      <div className="card-text3">
                        <p className="deskripsi-judul-pg3">{item.deskripsi}</p>
                      </div>
                    </div>
                        <h1 className="page3-judull">{item.nama}</h1>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div className="judul-pg3">
        <h1 data-aos="fade-up" className="judulpg3-1">Hidangan Penutup</h1>
        <p data-aos="zoom-in-up">
          Hidangan pembuka adalah cara pertama untuk memulai perjalanan kuliner
          Anda.
          <br /> Kami dengan bangga menyajikan sebuah hidangan yang menggoda dan
          memberikan sentuhan <br />
          pertama yang tidak terlupakan
        </p>
        <div className="stylee-pg3">
          <div data-aos="fade-up" className="style-page3">
            {data_penutup
              .map((item) => {
                const base64Image = arrayBufferToBase64(item.gambar.data);
                const imageURL = `data:${item.gambar.contentType};base64,${base64Image}`;
                return (
                  <div className="induk">
                    <div key={item.id_menu} className="card-page3">
                      <img data-aos="flip-left" className="img-page3" src={imageURL} alt="" />
                      <div className="card-text3">
                        <p className="deskripsi-judul-pg3">{item.deskripsi}</p>
                      </div>
                    </div>
                        <h1 className="page3-judull">{item.nama}</h1>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page3_1;
