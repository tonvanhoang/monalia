"use client"; // Thêm dòng này ở đầu file
import '../nav/nav.css'
import Link from 'next/link';
export default function ComponentNav() {
  const showMenu = () => {
    let menu = document.getElementById('Menu')as HTMLElement;
    menu.style.display = "block"
  };
  const noneMenu =()=>{
    let menu = document.getElementById('Menu')as HTMLElement
    menu.style.display='none'
  }
  return (
    <>
      <nav>
        <button onClick={showMenu}>MENU</button>
        <div className="img">
          <img src="/img/symbol-logo-mob.svg" alt="" />
          <img id="display-logo" src="/img/monalia-logo-mob.svg" alt="" />
        </div>
        <button>BOOK</button>
      </nav>
      <div id="Menu">
            <div className="menuChill">
                <div className="content">
                    <ul className="item-1">
                        <button onClick={noneMenu}>CLOSE</button>
                        <div className="title">
                            <li className="language"><a href="#">EN</a><a href="#">EL</a></li>
                            <li><Link href="/">HOME</Link></li>
                            <li><Link href={`/page/monalia`}>MONALIA</Link></li>
                            <li><Link href={`/page/room`}>ROOMS</Link></li>
                            <li><Link href={`/page/gallery`}>GALLERY</Link></li>
                            <li><Link href={`/page/location`}>LOCATION</Link></li>
                            <li><Link href={`/page/contact`}>CONTACT</Link></li>
                        </div>
                    </ul>
                    <ul className="item-2">
                        <li><a href="#">E. info@monalia.gr</a></li>
                        <li><a href="#">T. +30 695 515 4052</a></li>
                        <li><a href="#">FACEBOOK</a></li>
                        <li><a href="#">INSTAGRAM</a></li>
                    </ul>
                </div>
                <div className="img">
                    <button>BOOK</button>
                    <img src="/img/monalia-parga-suites-3.webp" alt=""/>
                </div>
            </div>
        </div>
    </>
  );
}
