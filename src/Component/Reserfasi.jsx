import "./Component CSS/Reserfasi.css"
import Footer from "../assets/Footer"
import Navbar from "../assets/Navbar"

function Reserfasi() {
    return (
        <div className="kontak">
            <div className="kontak-nav">
                <Navbar/>
            </div>
            <div className="pemesanan">
                <form className="container">
                    <h2>Pemesanan</h2>
                    <div className="name">
                        <input type="text-login" placeholder="First Name" required/>
                        <input type="text-login" placeholder="Last Name" required/>
                    </div>
                    <input type="email" placeholder="Email" required/>
                    <div className="data">
                        <input type="text-login" placeholder="Number Phone" required/>
                        <input type="date" placeholder="Date" required/>
                    </div>
                    <input type="text" placeholder="Jenis Makanan" required/><br />
                    <button>Pesan</button>
                </form>
                <div className="login-kiri">
                    <div className="home1-txt">
                        <h2>Kurnia Catering <span>Nih Bos</span></h2>
                        <p>Menyediakan berbagai macam makanan</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Reserfasi