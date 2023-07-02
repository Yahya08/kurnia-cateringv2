import "./Component CSS/Reservasi.css";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { IoLogoWhatsapp } from "react-icons/io";
import { FiMail } from "react-icons/fi";
import Navbar from "../assets/Navbar";
import Footer from "../assets/Footer";

const CateringReservationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [volume, setVolume] = useState("");
  const [message, setMessage] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Konfigurasi EmailJS
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
          // Tambahkan logika lainnya setelah email terkirim (misalnya, notifikasi sukses)
        },
        (error) => {
          console.log(error.text);
          console.error("Terjadi kesalahan saat mengirim email: ", error);
          // Tambahkan logika lainnya jika terjadi error saat mengirim email
        }
      );

    // Reset form setelah mengirim email
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const handleInputClick = () => {
    setIsClicked(true);
  };
  const handleInputBlur = () => {
    setIsClicked(false);
  };

  return (
    <div className="reservasi">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="contacts">
        <h1>Contacts</h1>
      </div>

      <div className="body-reservasi">
        <div className="form-reservasi">
          <form className="form" onSubmit={handleSubmit}>
            <h2>Booking</h2>
            <div className="nama-email">
              <input
                type="text"
                placeholder ={isClicked ? '' : 'Nama'}
                value={name}
                onChange={(e) => setName(e.target.value)}
                onClick={handleInputClick}
                onBlur={handleInputBlur}
              />

              <input
                type="email"
                placeholder={isClicked ? '' : 'Email'}
                value={email}
                onChange={(f) => setEmail(f.target.value)}
                onClick={handleInputClick}
                onBlur={handleInputBlur}
              />
            </div>

            <div className="noTelp-TglAcara">
              <input
                type="text"
                placeholder="Nomor Telepon"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="text"
                placeholder="Tanggal Acara"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="jumlah-jam">
              <input
                type="text"
                placeholder="Jumlah Pesanan"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
              />
              <input
                type="text"
                placeholder="Jam"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <textarea
              placeholder="Pesan"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit">Kirim</button>
          </form>
        </div>

        <div className="info-contacts">
          <div className="contact-poss">
            <ul>
              <li>
                <FiMail className="icn-ress" />
                <a href="mailto:kurniacatering2020@gmail.com">
                  Email
                  <p>kurniacatering2020@gmail.com</p>
                </a>
              </li>
              <li>
                <IoLogoWhatsapp className="icn-ress" />
                <a href="https://wa.me/6285712872931">
                  WhatsApp
                  <p>085870847511</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CateringReservationForm;
