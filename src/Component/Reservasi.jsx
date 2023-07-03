import "./Component CSS/Reservasi.css";
import background from ".././assets/Img/Card/backgrounfix2.jpg";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { IoLogoWhatsapp } from "react-icons/io";
import { FiMail } from "react-icons/fi";
import Navbar from "../assets/Navbar";
import Footer from "../assets/Footer";
import cheft from ".././assets/Img/Card/cheft.png";

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
      .sendForm("service_3bt41ry", "template_crxtm6c", e.target, "oSBkeDUj0MNhyMeX5")
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
          <h1>Contact</h1>
          {/* <p>Ada beberapa hidangan yang kami tawarkan mulai dari <br/>hidangan pembuka hidangan utama sampai hidangan penutup</p> */}
      </div>

         <img className="backhome" src={background} alt="" />
         
      </div>

      <div className="img">
          <img className="cheff" src={cheft} alt="" />
        </div>

      <div className="body-reservasi">
        <div className="form-reservasi">
          <form className="form" onSubmit={handleSubmit}>
            <h2>Booking</h2>
            <div className="nama-email">
              <input
                type="text" name="user_name"
                placeholder={isNameClicked ? "" : "Nama"}
                value={name}
                onChange={(e) => setName(e.target.value)}
                onClick={handleNameInputClick}
                onBlur={handleNameInputBlur}
              />

              <input
                type="email" name="user_email"
                placeholder={isEmailClicked ? "" : "Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onClick={handleEmailInputClick}
                onBlur={handleEmailInputBlur}
              />
            </div>

            <div className="noTelp-TglAcara">
              <input
                type="tel" name="user_number"
                placeholder={isPhoneClicked ? "" : "Nomor Telepon"}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onClick={handlePhoneInputClick}
                onBlur={handlePhoneInputBlur}
              />
              <input
                type="date" name="user_date"
                placeholder={isDateClicked ? "" : "Tanggal Acara"}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                onClick={handleDateInputClick}
                onBlur={handleDateInputBlur}
              />
            </div>

            <div className="jumlah-jam">
              <input
                type="number" name="user_volume"
                placeholder={isVolumeClicked ? "" : "Jumlah Pesanan"}
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                onClick={handleVolumeInputClick}
                onBlur={handleVolumeInputBlur}
              />
              <input
                type="text" name="user_time"
                placeholder={isTimeClicked ? "" : "Jam"}
                value={time}
                onChange={(e) => setTime(e.target.value)}
                onClick={handleTimeInputClick}
                onBlur={handleTimeInputBlur}
              />
            </div>
            <textarea  name="message"
              className="my-textarea-class"
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
            <h2>Contact</h2>
            <ul>
              <li>
                <FiMail className="icn-ress" />
                <a className="icn-resa" href="mailto:kurniacatering2020@gmail.com">
                  Email
                  <p className="icnresp">kurniacatering2020@gmail.com</p>
                </a>
              </li>
              <li>
                <IoLogoWhatsapp className="icn-ress" />
                <a className="icn-resa" href="https://wa.me/6285712872931">
                  WhatsApp
                  <p className="icnresp">085870847511</p>
                </a>
              </li>
            </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CateringReservationForm;
