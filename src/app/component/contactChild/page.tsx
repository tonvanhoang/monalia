import '../contactChild/contactChild.css'
export default function ComponentContactChild(){
    return(
        <>
        <div className="containerContactChild">
            <div>
            <h1>CONTACT</h1>
            <hr />
            </div>
            <div className='childContact'>
                <div className="left">
                <div className="item">
                    <div className='title'>
                        <p>ADDRESS</p>
                        <hr />
                    </div>
                    <div className='content'>
                    <div>
                        <img src="/img/MapPin(1).svg" alt="" />
                        <a>Parga, 48060, Greece</a>
                        <hr className='none' />
                    </div>
                    </div>
                </div>
                <div className="item">
                    <div className='title'>
                        <p>CONTACT</p>
                        <hr />
                    </div>
                    <div className='content'>
                    <div>
                        <img src="/img/EnvelopeSimple.svg" alt="" />
                        <a>info@monalia.gr</a>
                        <hr className='none' />
                    </div>
                    <div>
                        <img src="/img/PhoneCall.svg" alt="" />
                        <a>+30 695 515 4052</a>
                        <hr className='none' />
                    </div>

                    </div>
                </div>
                <div className="item">
                    <div className='title'>
                        <div>
                            <p className='nonemedia'>CONTACT</p>
                            <hr />
                        </div>
                        <div className='none'>
                            <p>SOCIAL MEDIA</p>
                        </div>
                    </div>
                    <div className='content'>
                    <div>
                    <img className='none' src="/img/PhoneCall.svg" alt="" />
                    <a>FACEBOOK</a>
                        <hr className='none' />
                    </div>
                    <div>
                    <img className='none' src="/img/PhoneCall.svg" alt="" />
                    <a>INSTAGRAM</a>
                        <hr className='none' />
                    </div>
                    </div>
                </div>
                </div>
                <div className="right">
                    <div className='title'>
                    <p>CONTACT FORM</p>
                    <hr />
                    </div>
                    <form action="">
                    <div className="item double-inp">
                        <div className='left'>
                        <label htmlFor="">Name</label>
                        <input type="text" name="" id="" />
                        </div>
                        <div className='right'>
                        <label htmlFor="">Surname</label>
                        <input type="text" name="" id="" />
                        </div>
                    </div>
                    <div className="item">
                        <label htmlFor="">Email <span>*</span></label>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="item">
                        <label htmlFor="">Phone <span>*</span></label>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="item">
                    <label>Select Room</label>
                    <div className='check'>
                        <label>
                        <input type="checkbox" name="room" value="gaea-suite" /> <p>Gaea Suite</p>
                        </label>
                        <label>
                        <input type="checkbox" name="room" value="anthea-villa" /> <p>Anthea Villa</p>
                        </label>
                        <label>
                        <input type="checkbox" name="room" value="galini-villa" /> <p>Galini Villa</p>
                        </label>
                        <label>
                        <input type="checkbox" name="room" value="elea-suite" /> <p>Elea Suite</p>
                        </label>
                    </div>
                    </div>

                    <div className="item double-inp">
                        <div className='left'>
                        <label htmlFor="">Arrival:</label>
                        <input type="text" name="" id="" />
                        </div>
                        <div className='right'>
                        <label htmlFor="">Departure:</label>
                        <input type="text" name="" id="" />
                        </div>
                    </div>
                    <div className="item">
                        <label htmlFor="">Message</label>
                        <textarea name="" id="mesage"></textarea>
                    </div>
                    <div className="item">
                    <label className='terms'>
                        <input type="checkbox" name="room" value="terms" />
                         <p>I agree and accept the Privacy Policy and give permission to access my personal data.</p>
                    </label>
                    </div>
                    <div className="btn">
                        <button>SEND</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="googleMap">
            <div className='title'>
                <p>GOOGLE MAP</p>
                <hr />
            </div>
            <div className='content'>
            <iframe
                        src="https://www.google.com/maps?q=10.781074020810077,106.75313588180518(Công+ty+cổ+phần+BeBank)&hl=vi&z=15&output=embed"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
            </div>
        </div>
        </>
    )
}