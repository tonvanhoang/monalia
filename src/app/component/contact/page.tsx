import Link from 'next/link'
import '../contact/contact.css'
import ComponentBookNow from '../booknow/page'
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
                <div className='contact'>
                    <p>CONTACT</p>
                    <hr/>
                </div>
                <div className="containerTitle">
                    <div className="titleLeftContact">
                        <div>
                            <p>POSTAL:</p>
                            <hr/>
                        </div>
                        <div className="direct">
                            <p>DIRECT:</p>
                            <hr/>
                        </div>
                    </div>
                    <div className="titleRightContact">
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
                <div className='none'>
                <p>MENU</p>
                <hr/>
                </div>
            </div>
           <div className='link'>
           <div className="col2">
                <div className='menu'>
                    <p>MENU</p>
                    <hr/>
                </div>
                <ul>
                    <li><Link href="/">HOME</Link></li>
                    <li><Link href="/page/monalia">MONALIA</Link></li>
                    <li><Link href="/page/room">ROOMS</Link></li>
                    <li><Link href="/page/gallery">GALLERY</Link></li>
                    <li><Link href="/page/location">LOCATION</Link></li>
                    <li><Link href="/page/contact">CONTACT</Link></li>

                </ul>
            </div>
            <div className="col3">
                <div className='socialMedia'>
                    <p>SOCIAL MEDIA</p>
                    <hr/>
                </div>
                <ul>
                    <li><Link href="#">FACEBOOK</Link></li>
                    <li><Link href="#">INSTAGRAM</Link></li>
                </ul>
            </div>
           </div>
        </div>
        <div className="item-3">
            <div className="top">
                <img src="/img/Logo-text.svg" alt=""/>
                <div className="btn">
                    <button><Link href="https://www.google.com/maps/place/MONALIA+Parga+Luxury+Suites/@39.2890255,20.4349758,17z/data=!3m1!4b1!4m9!3m8!1s0x135c7b0ba480b5c7:0x2654a5d066d75368!5m2!4m1!1i2!8m2!3d39.2890255!4d20.4375561!16s%2Fg%2F11y67sft60?entry=tts&g_ep=EgoyMDI0MTIxMS4wIPu8ASoJLDEwMjExMjMzSAFQAw%3D%3D">GET DIRECTIONS</Link></button>
                    <ComponentBookNow/>
                </div>
            </div>
            <hr/>
            <div className="bottom">
                <p>© 2025 MONALIA PARGA RESORT SUITES.<Link href="/page/termsConditions">Terms & Conditions</Link></p>
                <p>WELLDESIGNED BY IFRAME</p>
            </div>
        </div>
    </div>
        </>
    )
}