import "./intro.css";
import me from "../../images/me/me.jpg";

export default function Intro() {
 

  return (
    <div className="intro" id="intro">
        
        <div className="left">
            <p className="intro-descr">
                <h2>Hi There, I'm</h2>
                <h3>Sesethu Luzipo</h3>
                <h4>Web Developer | App Developer | DevOps Developer</h4>
            </p>
        </div>
      <div className="right">
        <div className="right-img">
          <img src={me} alt="" className="display-img "></img>
        </div>
      </div>
    </div>
  );
}
