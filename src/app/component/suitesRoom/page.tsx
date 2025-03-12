import '../suitesRoom/suitesRoom.css'
export default function ComponentSuitesRoom(){
    return(
        <>
        <div className="containerSuitesRoom">
        <h1>SUITES</h1>
        <hr />
        <div className="suites">
            <div className='suitesLeft'>
                <h3>
                The Gaea and Elea Suites combine simplicity with masterful design, creating a space that radiates warmth and serenity.
                </h3>
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
                        <img src="/img/monalia-parga-suites-8.webp" alt="" />
                        <button><a href="#">GAEA</a></button>
                    </div>
                    <div className='item-2'>
                        <img src="/img/monalia-parga-suites-8.webp" alt="" />
                        <button><a href="#">ELEA</a></button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}