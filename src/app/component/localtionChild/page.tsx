import '../localtionChild/localtionChild.css'
export default function ComponentLocationChild(){
    return(
        <>
        <div className="localtionChild">
        <div className="top">
            <h1> Parga, with the charm of a picturesque island and the essence of mainland Greece, is a destination that captivates every visitor.            </h1>
        </div>
        <div className="bottom">
            <div className="item-1">
                <p>Its natural beauty, featuring azure beaches, colorful houses, and narrow alleys, creates a fairytale setting for relaxation. The view of the Ionian Sea, highlighted by the charming islet of Panagia and the Venetian castle standing proud atop the town, invites visitors to immerse themselves in the area’s history and traditions.</p>
                <p>From Monalia Luxury Suites, Parga serves as the perfect starting point for exploring the rich nature and unique landscapes of the surrounding area. Nearby beaches such as Valtos, Lichnos, and Sarakiniko, as well as Agiofili with its pristine, crystal-clear waters and enchanting scenery, offer ideal spots for relaxing under the sun. The selection of beaches ranges from bustling spots with amenities to secluded coves for moments of peace.</p>
            </div>
            <div className="bottom_img">
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
    </div>
        </>
    )
}