import "./contacts.css"
import telephone from "../../images/details/telephone.png"
import email from "../../images/details/email.png"
import pin from "../../images/details/pin.png"

export default function Contacts(){
    return(
        <div className="contacts" id="contact">
            <div className="breakdown">
                <div className="contactCo">
                    <h18 class="c-details">Contact Details</h18>
                    <div className="c-info">
                        <ul className="phone">
                            <li>
                            <img scr={telephone} alt="" className="img-telephone"></img>

                                +27 646 6449
                            </li>
                        </ul>
                        <ul className="email">
                            
                            <li>
                                <img scr={email} alt="" className="img-email"></img>
                                sluzipo021@student.wethinkcode.co.za
                            </li>
                        </ul>
                        <ul className="location">
                            <li>
                            <img scr={pin} alt="" className="img-pin"></img>

                                CBD, Johannesburg, 2000
                            </li>
                        </ul>
                    </div>
                        
                
                </div>
            </div>

        </div>
    );
}