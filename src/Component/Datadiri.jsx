import "./Component CSS/Datadiri.css"
import "./Component CSS/Zenn.css"
import Img from "../assets/Img/Tim/Perusahaan/Ke2.jpeg"
import Img2 from "../assets/Img/Tim/Perusahaan/Ke3.jpg"
import Img3 from "../assets/Img/Tim/Perusahaan/Ke1.jpg"
import Img4 from "../assets/Img/Tim/Perusahaan/Ke4.jpeg"
import Img5 from "../assets/Img/Tim/Perusahaan/Ke5.jpeg"



function Datadiri() {
  return (
    <div className="datadiri">
        <div className="web">
          <div className="swipe-diri">
          <div className="card-diri">
            <img className="diri-img" src={Img} alt="" />
            <div className="diri-text">
              <h1 className="diri-judul">Prasmanan</h1>
              <p className="deskripsi-diri">Prasmanan di PT. Persero Tbk <br/>
               Pembangunan proyek Das serang</p>
            </div>
          </div>
          <div className="card-diri">
            <img className="diri-img" src={Img2} alt="" />
            <div className="diri-text">
              <h1 className="diri-judul">Prasmanan</h1>
              <p className="deskripsi-diri">Prasmanan di PT. Adikarya <br/>
              Pembangunan gedung kampus</p>
            </div>
          </div>
          <div className="card-diri">
            <img className="diri-img" src={Img3} alt="" />
            <div className="diri-text">
              <h1 className="diri-judul">Prasmanan</h1>
              <p className="deskripsi-diri">Bekerjasama dengan Rissa WO Boyolali</p>
            </div>
          </div>
          <div className="card-diri">
            <img className="diri-img" src={Img4} alt="" />
            <div className="diri-text">
              <h1 className="diri-judul">Prasmanan</h1>
              <p className="deskripsi-diri">Memperingati hari ulang tahun Kenedi Fagus</p>
            </div>
          </div>
          <div className="card-diri">
            <img className="diri-img" src={Img5} alt="" />
            <div className="diri-text">
              <h1 className="diri-judul">Box</h1>
              <p className="deskripsi-diri">Pengiriman makanan Box <br/>
              yang akan dikirim di proyek pembangunan irigasi Sempor, Kebumen</p>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Datadiri