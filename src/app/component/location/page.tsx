import '../location/location.css'
import Link from 'next/link'
export default function ComponentLocation(){
    return(
        <>
        <div className="section-7">
        <div className="top">
            <h1 className="location">Location</h1>
            <hr/>
            <h1 className="title"> Parga, with the charm of a picturesque island and the essence of mainland Greece, is a destination that captivates every visitor.            </h1>
        </div>
        <div className="bottom">
            <div className="item-1">
                <p>Its natural beauty, featuring azure beaches, colorful houses, and narrow alleys, creates a fairytale setting for relaxation. The view of the Ionian Sea, highlighted by the charming islet of Panagia and the Venetian castle standing proud atop the town, invites visitors to immerse themselves in the area’s history and traditions.</p>
                <button><Link href={`/page/location`}>MORE</Link></button>
            </div>
            <div className="item-2">
                <img src="/img/summer-vacations-parga-preveza.webp" alt=""/>
            </div>
            <div className="item-3">
                 <video autoPlay muted loop preload="playsinline">
                    <source type="video/mp4" src="https://monalia.gr/wp-content/themes/monalia/1439100_Aerial_Coast_1920x1080.mp4"/>
                 </video>
            </div>
        </div>
    </div>
        </>
    )
}