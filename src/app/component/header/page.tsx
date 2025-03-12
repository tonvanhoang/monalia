import '../header/header.css'
import ComponentNav from '../nav/page';
export default function ComponentHeader() {
    return (
     <>
      <header>
        <img
          className="backgroudHeader"
          src="https://monalia.gr/wp-content/uploads/2025/02/02.jpg"
          alt=""/>
        <ComponentNav/>
        <div className="grid-hero-home">
          <div className="item_1"></div>
          <div className="item_2"></div>
          <div className="item_3"></div>
        </div>
      </header>
     </>
    );
  }
  