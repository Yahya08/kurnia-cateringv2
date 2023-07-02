import "./Component CSS/Reservasi.css";
import background from ".././assets/Img/Card/backgrounfix2.jpg";
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
  const [isNameClicked, setIsNameClicked] = useState(false);
  const [isEmailClicked, setIsEmailClicked] = useState(false);
  const [isPhoneClicked, setIsPhoneClicked] = useState(false);
  const [isDateClicked, setIsDateClicked] = useState(false);
  const [isTimeClicked, setIsTimeClicked] = useState(false);
  const [isVolumeClicked, setIsVolumeClicked] = useState(false);
  const [isMessageClicked, setIsMessageClicked] = useState(false);

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
    setDate("");
    setTime("");
    setVolume("");
    setMessage("");
  };

  const handleNameInputClick = () => {
    setIsNameClicked(true);
  };

  const handleNameInputBlur = () => {
    setIsNameClicked(false);
  };

  const handleEmailInputClick = () => {
    setIsEmailClicked(true);
  };

  const handleEmailInputBlur = () => {
    setIsEmailClicked(false);
  };

  const handlePhoneInputClick = () => {
    setIsPhoneClicked(true);
  };

  const handlePhoneInputBlur = () => {
    setIsPhoneClicked(false);
  };

  const handleDateInputClick = () => {
    setIsDateClicked(true);
  };

  const handleDateInputBlur = () => {
    setIsDateClicked(false);
  };

  const handleTimeInputClick = () => {
    setIsTimeClicked(true);
  };

  const handleTimeInputBlur = () => {
    setIsTimeClicked(false);
  };

  const handleVolumeInputClick = () => {
    setIsVolumeClicked(true);
  };

  const handleVolumeInputBlur = () => {
    setIsVolumeClicked(false);
  };

  const handleMessageInputClick = () => {
    setIsMessageClicked(true);
  };

  const handleMessageInputBlur = () => {
    setIsMessageClicked(false);
  };

  return (
    <div className="reservasi">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="contacts">
      <div className="titlecontact" >
          <h1>Kurnia Catering</h1>

          <p>Ada beberapa hidangan yang kami tawarkan mulai dari <br/>hidangan pembuka hidangan utama sampai hidangan penutup</p>
      </div>

         <img className="backhome" src={background} alt="" />
         
      </div>

      <div className="body-reservasi">
        <div className="form-reservasi">
          <form className="form" onSubmit={handleSubmit}>
            <h2>Booking</h2>
            <div className="nama-email">
              <input
                type="text"
                placeholder={isNameClicked ? "" : "Nama"}
                value={name}
                onChange={(e) => setName(e.target.value)}
                onClick={handleNameInputClick}
                onBlur={handleNameInputBlur}
              />

              <input
                type="email"
                placeholder={isEmailClicked ? "" : "Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onClick={handleEmailInputClick}
                onBlur={handleEmailInputBlur}
              />
            </div>

            <div className="noTelp-TglAcara">
              <input
                type="text"
                placeholder={isPhoneClicked ? "" : "Nomor Telepon"}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onClick={handlePhoneInputClick}
                onBlur={handlePhoneInputBlur}
              />
              <input
                type="text"
                placeholder={isDateClicked ? "" : "Tanggal Acara"}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                onClick={handleDateInputClick}
                onBlur={handleDateInputBlur}
              />
            </div>

            <div className="jumlah-jam">
              <input
                type="text"
                placeholder={isVolumeClicked ? "" : "Jumlah Pesanan"}
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                onClick={handleVolumeInputClick}
                onBlur={handleVolumeInputBlur}
              />
              <input
                type="text"
                placeholder={isTimeClicked ? "" : "Jam"}
                value={time}
                onChange={(e) => setTime(e.target.value)}
                onClick={handleTimeInputClick}
                onBlur={handleTimeInputBlur}
              />
            </div>
            <textarea
              placeholder={isMessageClicked ? "" : "Pesan"}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onClick={handleMessageInputClick}
              onBlur={handleMessageInputBlur}
            ></textarea>
            <button type="submit" className="button-kirim">Kirim</button>
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
