
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
                    <h2 className="timh2">Kontak</h2>
                  
                </div>
            </div>
        </div>
        <div className="tim-card">
            <div className="imgtim">
                <img className="tim-img" src={Img} alt="" />
            </div>
            <div className="content-tim">
                <div className="detail-tim">
                    <h2 className="timh2">Kontak</h2>
                  
                </div>
            </div>
        </div> <div className="tim-card">
            <div className="imgtim">
                <img className="tim-img" src={Img} alt="" />
            </div>
            <div className="content-tim">
                <div className="detail-tim">
                    <h2 className="timh2">Kontak</h2>
                  
                </div>
            </div>
        </div>
       
        </div>
        </div>
        
 
  )
}

export default Tim