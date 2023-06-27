
import "./Component CSS/Tim.css"
import Img from "../assets/Img/Card/png2.png"
function Tim() {
  return (
    <div className="tim">
        <div className="sub-tim">
        <div className="tim-card">
            <div className="imgtim">
                <img className="tim-img" src={Img} alt="" />
            </div>
            <div className="content-tim">
                <div className="detail-tim">
                    <a className="timh2" href="https://wa.me/6285870847511">Kontak</a>
                </div>
            </div>
        </div>
        <div className="tim-card">
            <div className="imgtim">
                <img className="tim-img" src={Img} alt="" />
            </div>
            <div className="content-tim">
                <div className="detail-tim">
                    <a className="timh2" href="mailto:kurniacatering2020@gmail.com">Email</a>
                </div>
            </div>
        </div> <div className="tim-card">
            <div className="imgtim">
                <img className="tim-img" src={Img} alt="" />
            </div>
            <div className="content-tim">
                <div className="detail-tim">
                    <a className="timh2" href="https://www.google.com/maps/@-7.7589924,110.4080597,3a,75y,123.66h,90.14t/data=!3m7!1e1!3m5!1sFicJ9H0YFRMCRIR2Jc_41w!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DFicJ9H0YFRMCRIR2Jc_41w%26cb_client%3Dsearch.revgeo_and_fetch.gps%26w%3D96%26h%3D64%26yaw%3D129.08%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu">Lokasi</a>
                </div>
            </div>
        </div>
       
        </div>
        </div>
        
 
  )
}

export default Tim