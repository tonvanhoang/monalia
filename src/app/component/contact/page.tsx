import '../contact/contact.css'
export default function ComponentContact(){
    return(
        <>
        <div className="section-8">
        <div className="item-1">
            <img src="/img/symbol-logo-mob.svg" alt=""/>
            <img src="/img/arrow-top.svg" alt=""/>
        </div>
        <div className="item-2">
            <div className="col1">
                <p>CONTACT</p>
                <hr/>
                <div className="containerTitle">
                    <div className="titleLeft">
                        <div>
                            <p>POSTAL:</p>
                            <hr/>
                        </div>
                        <div className="direct">
                            <p>DIRECT:</p>
                            <hr/>
                        </div>
                    </div>
                    <div className="titleRight">
                        <div className="item">
                            <div>
                                <img src="/img/MapPin(1).svg" alt=""/>
                                <p>Parga, 48060, Greece</p>
                            </div>
                            <hr/>
                        </div>
                        <div className="item direct">
                           <div>
                            <img src="/img/PhoneCall.svg" alt=""/>
                            <p>info@monalia.gr</p>
                           </div>
                                <hr/>
                            </div>
                        <div className="item">
                            <div>
                                <img src="/img/bed-icon.svg" alt=""/>
                                <p>+30 695 515 4052</p>
                            </div>
                                <hr/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hiddenCol">
                <p>MENU</p>
                <hr/>
            </div>
            <div className="col2">
                <p>MENU</p>
                <hr/>
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">MONOALIA</a></li>
                    <li><a href="#">ROOMS</a></li>
                    <li><a href="#">GALLERY</a></li>
                    <li><a href="#">LOCATION</a></li>
                    <li><a href="#">CONTACT</a></li>

                </ul>
            </div>
            <div className="col3">
                <p>SOCIAL MEDIA</p>
                <hr/>
                <ul>
                    <li><a href="#">FACEBOOK</a></li>
                    <li><a href="#">INSTAGRAM</a></li>
                </ul>
            </div>
        </div>
        <div className="item-3">
            <div className="top">
                <img src="/img/Logo-text.svg" alt=""/>
                <div className="btn">
                    <button><a href="#">GET DIRECTIONS</a></button>
                    <button><a href="#">BOOK NOW</a></button>
                </div>
            </div>
            <hr/>
            <div className="bottom">
                <p>© 2025 MONALIA PARGA RESORT SUITES.<a href="">Terms & Conditions</a></p>
                <p>WELLDESIGNED BY IFRAME</p>
            </div>
        </div>
    </div>
        </>
    )
}