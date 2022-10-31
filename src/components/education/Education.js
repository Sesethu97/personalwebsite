import "./education.css"

export default function Education(){
    return(
        <div className="education" id="education">
            <div className="bookInfo">
                <div className="bookInfo-header">
                    <h12>Education</h12>
                </div>
                <div className="leftCurrent">
                    <div className="WTC">
                        <h6>Current studies</h6>
                            <div className="info">
                                <ul className="currentSchool">
                                    <li>
                                        Currently studing for Certificate in Software Engineering.
                                        <br/> WeThinkCode_
                                        Graduation year : <b>2023</b>
                                    </li>
                                </ul>
                
                            </div>
                    </div>
                </div>

                <div className="rightCurrent">
                
                    <div className="CPUT">
                        <h6>Previous Studies</h6>
                            <div className="varisty">
                                <ul className="previousSchool">
                                    <li>
                                        Diploma in Marine Science.
                                        <br/>CPUT
                                        Graduation year : <b>2018</b>
                                    </li>
                                    <li>
                                        BTech in Oceanography.
                                        <br/>CPUT
                                        Graduation year : <b>2019</b>
                                    </li>
                                </ul>   
                            </div>
                    </div>
                    
                </div>
            </div>

        </div>
    );
}