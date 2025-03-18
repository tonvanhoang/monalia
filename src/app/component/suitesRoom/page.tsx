import '../suitesRoom/suitesRoom.css'
import Link from 'next/link'
export default function ComponentSuitesRoom(){
    return(
        <>
        <div className="containerSuitesRoom">
        <h1>SUITES</h1>
        <hr />
        <div className="suitesroom">
            <div className='suitesLeft'>
                <h3>
                The Gaea and Elea Suites combine simplicity with masterful design, creating a space that radiates warmth and serenity.
                </h3>
                <div className="containerTitleSuites">
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
                    <p>Up to 2 persons</p>
                  </div>
                  <hr />
                </div>
                <div className="item">
                  <div>
                    <img src="/img/house-icon.svg" alt="" />
                    <p>Size: 35 sq.m.</p>
                  </div>
                  <hr />
                </div>
                <div className="item">
                  <div>
                    <img src="/img/bed-icon.svg" alt="" />
                    <p>1 king-size bed</p>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
            </div>
            <div className='suitesRight'>
                <p>Choose Suite:</p>
                <div className='suitesChild'>
                    <div className="item-1">
                      <div className="img">
                      <img src="/img/monalia-parga-suites-8.webp" alt="" />
                      </div>
                        <button><Link href="/page/gaea">GAEA</Link></button>
                    </div>
                    <div className="item-1">
                      <div className="img">
                      <img src="/img/monalia-parga-suites-8.webp" alt="" />
                      </div>
                        <button><Link href="/page/elea">ELEA</Link></button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}