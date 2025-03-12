import '../villaRoom/vilaroom.css'
export default function ComponentVilaRoom(){
    return(
        <>
        <div className="containerSuitesRoom">
        <h1>Villas</h1>
        <hr />
        <div className="suites">
            <div className='suitesLeft'>
                <h3>
                The Anthea and Galini Villas offer larger, more luxurious accommodations, ideal for families or groups seeking ultimate comfort and privacy.                </h3>
                <div className="containerTitle">
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
            <div className='suitesRight'>
                <p>Choose Suite:</p>
                <div className='suitesChild'>
                    <div className="item-1">
                        <img src="/img/monalia-parga-suites-8.webp" alt="" />
                        <button><a href="#">ANTHEA</a></button>
                    </div>
                    <div className='item-2'>
                        <img src="/img/monalia-parga-suites-8.webp" alt="" />
                        <button><a href="#">GALINI</a></button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}