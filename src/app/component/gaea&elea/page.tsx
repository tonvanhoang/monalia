import '../gaea&elea/gaea&elea.css'
import ComponentGallery from "../gallery/page"
import ComponentBookNow from '../booknow/page'
export default function ComponentGaeaElea(){
    return(
        <>
        <div className="title">
            <p>The Gaea Suite combine simplicity with masterful design, creating a space that radiates warmth and serenity.</p>
        </div>
        <div className="containerGaea">
        <div className="content-1">
            <p>Featuring an open-plan layout that incorporates the bedroom, living area, and kitchen, these suites provide a welcoming and comfortable space adorned with high-quality natural materials.</p>
            <span>Carefully curated details in ceramics and wooden elements enrich the space’s character. Outside, the covered seating area and private pool offer moments of enjoyment and relaxation, ideal for gazing at the views and feeling at one with the surroundings.</span>
        </div>
        <ComponentBookNow/>
        </div>
        <div className='containerRooms'>
            <div className="containerLeft">
            <div className='attributes'>
                <p>Attributes:</p>
              <hr />
            </div>
            <div className="containerTitle">
              <div className="titleLeft">
              </div>
              <div className="titleRight">
                <div className="itemVila">
                  <div>
                    <img src="/img/person-icon.svg" alt="" />
                    <p>Up to 4 persons</p>
                  </div>
                  <hr />
                </div>
                <div className="itemVila">
                  <div>
                    <img src="/img/house-icon.svg" alt="" />
                    <p>Size: 38 sq.m.</p>
                  </div>
                  <hr />
                </div>
                <div className="itemVila">
                  <div>
                    <img src="/img/bed-icon.svg" alt="" />
                    <p>2 king-size bed</p>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
            </div>
            <div className="containerRight">
            <div className='facilities'>
                <p>FACILITIES</p>
              <hr />
            </div>
            <div className='btn'>
              <div className="row">
                  <button type='button' data-bs-toggle="collapse" data-bs-target="#multiCollapseExample1" aria-expanded="false" aria-controls="multiCollapseExample1">
                    <a>In your private kitchen:</a>
                    <div className="col">
                    <div className="collapse multi-collapse" id="multiCollapseExample1">
                      <li><a>Washing machine</a></li>
                      <li><a>Washing machine</a></li>
                      <li><a>Washing machine</a></li>
                      <li><a>Washing machine</a></li>
                      <li><a>Washing machine</a></li>
                      <li><a>Washing machine</a></li>
                      <li><a>Washing machine</a></li>
                    </div>
                  </div>
                  </button>
                </div>
            </div>
            <div className='btn'>
              <div className="row">
                  <button type='button' data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">
                    <a>In your private bathroom:</a>
                    <div className="col">
                    <div className="collapse multi-collapse" id="multiCollapseExample2">
                      <li><a>Washing machine</a></li>
                      <li><a>Washing machine</a></li>
                      <li><a>Washing machine</a></li>
                      <li><a>Washing machine</a></li>
                      <li><a>Washing machine</a></li>
                      <li><a>Washing machine</a></li>
                      <li><a>Washing machine</a></li>
                    </div>
                  </div>
                  </button>
                </div>
            </div>
            <div className='btn'>
              <div className="row">
                  <button type='button' data-bs-toggle="collapse" data-bs-target="#multiCollapseExample3" aria-expanded="false" aria-controls="multiCollapseExample3">
                    <a>Suite Amenities:</a>
                    <div className="col">
                    <div className="collapse multi-collapse" id="multiCollapseExample3">
                      <li><a>Washing machine</a></li>
                      <li><a>Washing machine</a></li>
                      <li><a>Washing machine</a></li>
                      <li><a>Washing machine</a></li>
                      <li><a>Washing machine</a></li>
                      <li><a>Washing machine</a></li>
                      <li><a>Washing machine</a></li>
                    </div>
                  </div>
                  </button>
                </div>
            </div>
          </div>
        </div>
        <div className="containerPhotoGallery">
          <div>
            <p>PHOTO GALLERY</p>
            <hr />
          </div>
          <ComponentGallery/>
        </div>
        </>
    )
}