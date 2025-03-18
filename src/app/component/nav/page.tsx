"use client";
import { useState, useEffect } from "react";
import "../nav/nav.css";
import Link from "next/link";
import ComponentBook from "../book/page";
export default function ComponentNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [hideLi, setHideLi] = useState(false); 
  const [showLi, setShowLi] = useState(false);
  const [liIndex, setLiIndex] = useState(0); // New state for li index
  const [showNavbar, setShowNavbar] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowNavbar(true);
        }, 300);

        return () => clearTimeout(timer);
    }, []);


  useEffect(() => {
    const btnMenu = document.getElementById("btn-menu");
    const menu = document.getElementById("Menu");
    const btnNoneMenu = document.getElementById("btn-Nonemenu");
    const img = document.getElementById("menu-img");
    if (btnMenu && menu && btnNoneMenu) {
      const openMenu = () => {
        menu.classList.add("show");
        setTimeout(() => {
          setShowImage(true);
        }, 300);
        let index = 0;
        const interval = setInterval(() => {
          setLiIndex(index);
          index++;
          if (index > 9) clearInterval(interval);
        }, 300);
      };
      const closeMenu = () => {
        let index = 9;
        const interval = setInterval(() => {
          setLiIndex(index);
          index--;
          if (index < 0) {
            clearInterval(interval);
            setHideLi(true);
            setTimeout(() => {
              setShowLi(false);
              setHideLi(false);
              setShowImage(false);
              setLiIndex(0);
              document.getElementById("Menu")?.classList.remove("show");
            }, 100);
          }
        }, 300); 
      };
      
      btnMenu.addEventListener("click", openMenu);
      btnNoneMenu.addEventListener("click", closeMenu);
      return () => {
        btnMenu.removeEventListener("click", openMenu);
        btnNoneMenu.removeEventListener("click", closeMenu);
      };
    }
  }, []);

  return (
    <>
      <nav id="navbar" className={showNavbar ? "showNav" : ""}>        <div className="top">
        <button id="btn-menu"><a href="#">MENU</a></button>
        <div className={`imgTop ${isScrolled ? "scrolled" : ""}`}>
          <img src="/img/symbol-logo-mob.svg" alt="" />
        </div>
        <ComponentBook/>
        </div>
        <div className="imgBottom">
        <img
            id="display-logo"
            src="/img/monalia-logo-mob.svg"
            alt=""
            className={isScrolled ? "hidden" : ""}
          />
        </div>
      </nav>
      <div id="Menu">
        <div className="menuChill">
          <div className="content">
            <ul className="item-1">
              <button id="btn-Nonemenu">CLOSE</button>
              <div className="title">
                <div className="language">
                  <a href="#">EN</a>
                  <a href="#">EL</a>
                </div>
                <li className={liIndex >= 1 ? (hideLi ? "hide" : "show") : ""}>
                    <Link href="/">HOME</Link>
                  </li>
                  <li className={liIndex >= 2 ? (hideLi ? "hide" : "show") : ""}>
                    <Link href="/page/monalia">MONALIA</Link>
                  </li>
                  <li className={liIndex >= 3 ? (hideLi ? "hide" : "show") : ""}>
                    <Link href="/page/room">ROOMS</Link>
                  </li>
                  <li className={liIndex >= 4 ? (hideLi ? "hide" : "show") : ""}>
                    <Link href="/page/gallery">GALLERY</Link>
                  </li>
                  <li className={liIndex >= 5 ? (hideLi ? "hide" : "show") : ""}>
                    <Link href="/page/location">LOCATION</Link>
                  </li>
                  <li className={liIndex >= 6 ? (hideLi ? "hide" : "show") : ""}>
                    <Link href="/page/contact">CONTACT</Link>
                  </li>
              </div>
            </ul>
            <ul className="item-2">
              <li id="li" className={liIndex >= 5 ? (hideLi ? "hide" : "show") : ""}><a href="#">E. info@monalia.gr</a></li>
              <li id="li" className={liIndex >= 7 ? "show" : ""}><a href="#">T. +30 695 515 4052</a></li>
              <li id="li" className={liIndex >= 8 ? "show" : ""}><a href="#">FACEBOOK</a></li>
              <li id="li" className={liIndex >= 9 ? "show" : ""}><a href="#">INSTAGRAM</a></li>
            </ul>
          </div>
          <div className="img">
            <ComponentBook/>
            <img
              id="menu-img"
              src="/img/monalia-parga-suites-3.webp"
              alt=""
              style={{ display: showImage ? "block" : "none" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
