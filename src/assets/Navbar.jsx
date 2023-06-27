import "./assets CSS/Navbar.css";
import { MdFastfood } from "react-icons/md";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <h1 className="navbarh1"><MdFastfood/> Kurnia Catering</h1>
      <nav>
        <Link to={"/"} >Beranda</Link>
        <Link to={"/menu"} >Menu</Link>
        <Link to={"/reserfasi"}>Kontak</Link>
        <Link to={"/tentang"} >Tentang</Link>


        {/* <a href="#">Beranda</a> */}
        {/* <a href="#">Menu</a>
        <a href="#">Kontak</a>
        <a href="#">Tentang</a> */}
        <div className="animation start-home"></div>
      </nav>
    </div>
  );
}

export default Navbar;
