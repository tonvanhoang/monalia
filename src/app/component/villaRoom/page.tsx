import '../villaRoom/vilaroom.css'
import Link from 'next/link'
export default function ComponentVilaRoom(){
    return(
        <>
        <div className="containervillasRoom">
        <h1>Villas</h1>
        <hr />
        <div className="villasroom">
            <div className='villasLeft'>
                <h3>
                The Anthea and Galini Villas offer larger, more luxurious accommodations, ideal for families or groups seeking ultimate comfort and privacy.                </h3>
                <div className="containerTitleVilas">
              <div className="titleLeft">
                <div>
                  <p>Attributes:</p>
                  <hr />
                </div>
              </div>
              <div className="titleRight">
                <div className="item">
                  <div>
                    <img src="/img/person-icon.svg" alt="" />
                    <p>Up to 4 persons</p>
                  </div>
                  <hr />
                </div>
                <div className="item">
                  <div>
                    <img src="/img/house-icon.svg" alt="" />
                    <p>Size: 85 sq.m.</p>
                  </div>
                  <hr />
                </div>
                <div className="item">
                  <div>
                    <img src="/img/bed-icon.svg" alt="" />
                    <p>2 king-size bed</p>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
            </div>
            <div className='villasRight'>
                <p>Choose Suite:</p>
                <div className='villasChild'>
                    <div className="item-1">
                      <div className="img">
                      <img src="/img/monalia-parga-suites-8.webp" alt="" />                    
                      </div>
                        <button><Link href="/page/anthea">ANTHEA</Link></button>
                    </div>
                    <div className='item-1'>
                      <div className="img">
                      <img src="/img/monalia-parga-suites-8.webp" alt="" />                   
                      </div>
                        <button><Link href="/page/galini">GALINI</Link></button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}