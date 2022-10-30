import "./intro.css";
import me from "../../images/me/me.jpg";
import { init } from "ityped"
import { useEffect, useRef } from "react"

export default function Intro() {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
          showCursor : false,
          backDelay: 1500,
          backSpeed:60,
          strings: ["Web Developer", " App Developer", "DevOps Developer"],
        })
    
    }, [])
  return (
    <div className="intro" id="intro">
        
        <div className="left">
            <p>
                <h2>Hi There, I'm</h2>
                <h3>Sesethu Luzipo</h3>
                <h4>Aspring <span ref={textRef}></span> </h4>
            </p>
        </div>
      <div className="right">
        <div className="right-img">
          <div className="right-clipA"></div>
          <div className="right-clipB"></div>
          <img src={me} alt="" className="display-img "></img>
        </div>
      </div>
    </div>
  );
}
