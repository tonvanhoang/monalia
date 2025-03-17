"use client";
import { useState, useEffect } from "react";
import "../nav/nav.css";
import Link from "next/link";
import ComponentBook from "../book/page";
export default function ComponentNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [hideLi, setHideLi] = useState(false); 
  const [showLi,setShowLi] = useState(false)
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
    const btnMenu = document.getElementById("btn-menu");
    const menu = document.getElementById("Menu");
    const btnNoneMenu = document.getElementById("btn-Nonemenu");
    const img = document.getElementById("menu-img");
    const li = document.getElementById('li')
    if (btnMenu && menu && btnNoneMenu) {
      const openMenu = () => {
        menu.classList.add("show");
        setTimeout(() => {
          setShowImage(true);
        }, 500);
        setTimeout(()=>{
          setShowLi(true)
        },1000)
      };
      const closeMenu = () => {
        setHideLi(true);
        setTimeout(() => {
          setShowLi(false);
          setHideLi(false);
          setShowImage(false);
          document.getElementById("Menu")?.classList.remove("show");
        }, 1800);
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
      <nav>
        <div className="top">
        <button id="btn-menu"><a href="#">MENU</a></button>
        <div className="imgTop">
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
                <li className={showLi ? (hideLi ? "hide" : "show") : ""}>
                    <Link href="/">HOME</Link>
                  </li>
                  <li className={showLi ? (hideLi ? "hide" : "show") : ""}>
                    <Link href="/page/monalia">MONALIA</Link>
                  </li>
                  <li className={showLi ? (hideLi ? "hide" : "show") : ""}>
                    <Link href="/page/room">ROOMS</Link>
                  </li>
                  <li className={showLi ? (hideLi ? "hide" : "show") : ""}>
                    <Link href="/page/gallery">GALLERY</Link>
                  </li>
                  <li className={showLi ? (hideLi ? "hide" : "show") : ""}>
                    <Link href="/page/location">LOCATION</Link>
                  </li>
                  <li className={showLi ? (hideLi ? "hide" : "show") : ""}>
                    <Link href="/page/contact">CONTACT</Link>
                  </li>
              </div>
            </ul>
            <ul className="item-2">
              <li id="li" className={showLi ? "show" : ""}><a href="#">E. info@monalia.gr</a></li>
              <li id="li" className={showLi ? "show" : ""}><a href="#">T. +30 695 515 4052</a></li>
              <li id="li" className={showLi ? "show" : ""}><a href="#">FACEBOOK</a></li>
              <li id="li" className={showLi ? "show" : ""}><a href="#">INSTAGRAM</a></li>
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
