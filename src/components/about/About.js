import "./about.css";
import me from "../../images/me/mee.jpg";


export default function About() {
  return (
    <div className="about" id="about">
        <div className="lefts">
            <div className="flex-container">
                <div className="card-passage">
                <h5 class="header">About me</h5>
                <span className="paraInfo">
                    <p className="paragraph">
                        I am Sesethu Luzipo a last year WeThinkCode_ student that was born and
                        raised in a small town called called eQonce in the Eastern Cape.
                        <br />
                        That is aspring to become an aspring to be a Fullstack Developer one
                        day.
                        <br />
                        From an Oceanography background to studying lines of code to produce
                        projects that are mindblowing was been a rollercoaster that I am quite
                        greatful for.
                        <br />
                        The pressure of slowing learning to debug code and to build creative
                        products has enhanced my creative mind and problem solving skillis.
                        <br />
                        <br />
                        Teachnology has become the cornerstone of the world and the pressure
                        to join has increased. Hence, the career change and also my desire to
                        combine my interests of the biology and tech world. I cant wait to
                        enter a new chapter in my life by entering the work environment with
                        the goals of refining my skills.

                    </p>

                </span>    
                </div>
            </div>
        </div>
        <div className="rights">

            <div className="flex-containers">
                <div className="flex-img">
                    <div className="right-clipA"></div>

                    <img src={me} alt="" className="img-dis"></img>                
                </div>
            </div>


        </div>
    </div>
  );
}
