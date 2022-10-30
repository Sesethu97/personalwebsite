import "./navbar.css"
export default function Navbar(){
    return(
        <div className="navbar" id="navbar">
            <div className="navbarWrapper">
                <div className="left">
                    <div className="left-nav">
                        <div className="logo">
                            <h1>SL</h1>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="right-nav">
                        <div className="hamburger">
                            <span className="line1"></span>
                            <span className="line2"></span>
                            <span className="line3"></span>


                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    
           
    );
}