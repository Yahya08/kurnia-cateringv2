import "../Component CSS/Page3.css";
import apetizer from  "../../assets/Img/Card/apetizer.jpg";
import salad from  "../../assets/Img/Card/salad.jpg";
import risoles from   "../../assets/Img/Card/risoles.jpg";
import Img from "../../assets/Img/Card/Resep Nasi Uduk Betawi yang Maknyus & Enyoi.jpg";
function Page3_1() {
  return (
    <div className="menu-page3">
      <div className="judul-pg3">
        <h1 className="judulpg3-1">Hidangan Pembuka</h1>
        <p>Hidangan pembuka adalah cara pertama untuk memulai perjalanan kuliner Anda.
         <br /> Kami dengan bangga menyajikan sebuah hidangan yang menggoda dan memberikan sentuhan <br />
         pertama yang tidak terlupakan
        </p>
      </div>
      <div className="stylee-pg3">
        <div className="style-page3">
          <div className="card-page3">
            <img className="img-page3" src={apetizer} alt="" />
            <div className="card-text3">
              <h1 className="menu-judul-pg3">Apetizer</h1>
              <p className="deskripsi-judul-pg3">Italian food</p>
            </div>
          </div>

          <h1 className="page3-judull">Apetizer</h1>
        </div>
        <div className="style-page3">
          <div className="card-page3">
            <img className="img-page3" src={salad} alt="" />
            <div className="card-text3">
              <h1 className="menu-judul-pg3">Salad</h1>
              <p className="deskripsi-judul-pg3">Italian Fodds</p>
            </div>
          </div>
          <h1 className="page3-judull">Salad</h1>
        </div>
        <div className="style-page3">
          <div className="card-page3">
            <img className="img-page3" src={risoles} alt="" />
            <div className="card-text3">
              <h1 className="menu-judul-pg3">Risoles</h1>
              <p className="deskripsi-judul-pg3">Indonesian food </p>
            </div>
          </div>
          <h1 className="page3-judull">Risoles</h1>
        </div>

      </div>
      <div className="judul-pg3">
        <h1 className="judulpg3-1">Hidangan Inti</h1>
        <p>Hidangan pembuka adalah cara pertama untuk memulai perjalanan kuliner Anda.
         <br /> Kami dengan bangga menyajikan sebuah hidangan yang menggoda dan memberikan sentuhan <br />
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
        <h1 className="judulpg3-1">Hidangan Penutup</h1>
        <p>Hidangan pembuka adalah cara pertama untuk memulai perjalanan kuliner Anda.
         <br /> Kami dengan bangga menyajikan sebuah hidangan yang menggoda dan memberikan sentuhan <br />
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

export default Page3_1;