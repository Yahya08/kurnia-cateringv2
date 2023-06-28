import "../Component CSS/Tentang.css";
import Img from "../../assets/Img/Card/resersfasi.jpg";
function Page_tentang() {
  return (
    <div className="tentang-page">
      <div className="con-tentang">
        <div className="sub-tentang">
          <div className="card-tentang3">
            <img className="tentang-img" src={Img} alt="" />
            <div className="tentang2-txt">
              <h2>
                Kurnia Catering <span>Nih bos</span>
              </h2>
              <p>Dengan melayani</p>
            </div>
          </div>
        </div>
        <div className="sub-tentang">
          <div className="card-tentang3">
            <div className="tentang2-txt">
              <h2>
                Kurnia Catering <span>Nih bos</span>
              </h2>
              <p>Dengan melayani</p>
            </div>
            <img className="tentang-img2" src={Img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page_tentang;
