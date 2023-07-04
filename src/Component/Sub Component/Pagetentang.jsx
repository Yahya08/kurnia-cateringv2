import "../Component CSS/Tentang.css";
import Visi from "../../assets/Img/Tim/Perusahaan/Ke6.jpg"
import { useEffect } from "react";
import Sejarah from "../../assets/Img/Tim/Perusahaan/Ke1.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';


function Page_tentang() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();

  
},[]
  );
  return (
    <div className="tentang-page">
      <div className="con-tentang">
        <div  data-aos="fade-right" className="sub-tentang">
          <div className="card-tentang3">
            <img  fade-right className="tentang-img" src={Visi} alt="" />
            <div className="tentang2-txt">
              <h2>
                Visi
              </h2>
              <p>Visi Kurnia Catering
                  Menjadi penyedia jasa katering terkemuka yang diakui secara nasional dan internasional, <br/>
                  memberikan pengalaman kuliner yang luar biasa, serta menjaga kualitas<br/> dan 
                  kepuasan pelanggan sebagai prioritas utama</p>

              <h2>
                Misi
              </h2>
              <p>1. Memberikan makanan berkualitas tinggi dan layanan terbaik kepada pelanggan kami.<br/>
                  2. Menggunakan bahan-bahan segar dan berkualitas untuk menghasilkan hidangan yang lezat dan sehat.<br/>
                    3. Menyediakan pilihan menu yang beragam, termasuk makanan lokal dan internasional, sesuai dengan kebutuhan dan preferensi pelanggan.<br/>
                    4. Menjalankan operasi dengan standar kebersihan dan keamanan makanan yang tinggi untuk menjamin kualitas dan keamanan hidangan.<br/>
                    5. Mengutamakan keramahan, profesionalisme, dan keramahan dalam setiap interaksi dengan pelanggan kami.<br/>
                    6. Mengembangkan kemitraan jangka panjang dengan pelanggan, mitra, dan pemasok untuk menciptakan hubungan yang saling menguntungkan.<br/>
                    7. Berinovasi secara terus-menerus dalam menciptakan konsep dan desain menu yang unik, sesuai dengan tren terbaru dalam industri katering.<br/>
                    9. Mendukung keberlanjutan dan tanggung jawab lingkungan dengan menerapkan praktik ramah lingkungan dalam operasi kami</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className="sub-tentang">
          <div className="card-tentang4">
            <div className="tentang4-txt">
              <h2>
                Sejarah Perusahaan
              </h2>
              <p>Pada tahun 2019, Kurnia Catering didirikan oleh sekelompok individu yang memiliki <br/>
              keahlian dan pengalaman di bidang kuliner dan layanan katering. Mereka memiliki visi untuk membawa <br/>
              pengalaman kuliner yang istimewa kepada pelanggan mereka. Selama tahun pertama, <br/>
              perusahaan fokus pada pembentukan identitas merek mereka. Ini melibatkan pemilihan nama perusahaan,<br/>
              pengembangan logo, dan penentuan nilai-nilai inti yang akan menjadi landasan operasional mereka.<br/>
              Selama tahun ini, Kurnia Catering juga berinvestasi dalam membangun  <br/>infrastruktur yang diperlukan untuk mendukung
              operasional mereka. Mereka mengatur dapur <br/> yang modern  memperoleh peralatan katering, dan mempekerjakan
              staf yang terampil dan berdedikasi. <br/>Setelah berbagai persiapan, Kurnia Catering meluncurkan layanan
              mereka secara resmi.<br/>  Mereka mulai menerima pesanan katering untuk berbagai acara, seperti 
              pertemuan bisnis, <br/>konferensi, pesta ulang tahun, dan acara lainnya</p>

            </div>
            <img  className="tentang-img2" src={Sejarah} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page_tentang;
