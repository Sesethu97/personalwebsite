import "./intro.css"
import me from '../../images/me/me.jpg';

export default function Intro(){
    return(
        <div className="intro" id="intro">
            <div className="left">
                
            </div>
            <div className="right">
            <div className="right-img">
              <div className="right-clipA"></div>
              <div className="right-clipB"></div>
              <img src={me} alt=""  className="display-img "></img>
            </div>
            </div>

        </div>
    );
}