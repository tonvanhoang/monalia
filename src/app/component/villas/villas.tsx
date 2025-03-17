"use client";

import { useEffect } from "react";
import "../villas/villas.css";
import Link from "next/link";
export default function ComponentVillas() {
  useEffect(() => {
    const sliderVila = document.querySelector(".sliderVila") as HTMLElement | null;
    const itemVilas = document.querySelectorAll(".sliderVila .itemVila");
    const prevBtn = document.getElementById("prevBtnVila");
    const nextBtn = document.getElementById("nextBtnVila");

    if (!sliderVila || !prevBtn || !nextBtn) return;

    const totalItemVilas = itemVilas.length;
    let visibleItemVilas = window.innerWidth <= 768 ? 1 : 3;
    let currentIndex = totalItemVilas;

    // Clone images to create loop effect
    const firstClone = Array.from(itemVilas).map((itemVila) => itemVila.cloneNode(true) as HTMLElement);
    const lastClone = Array.from(itemVilas).map((itemVila) => itemVila.cloneNode(true) as HTMLElement);

    firstClone.forEach((itemVila) => sliderVila.appendChild(itemVila));
    lastClone.reverse().forEach((itemVila) => sliderVila.insertBefore(itemVila, sliderVila.firstChild));

    const updateSliderVila = (animate = true) => {
      const sliderVilaWrapper = document.querySelector(".sliderVila-wrapper") as HTMLElement | null;
      if (!sliderVilaWrapper) return;

      visibleItemVilas = window.innerWidth <= 768 ? 1 : 3;
      const itemVilaWidth = sliderVilaWrapper.clientWidth / visibleItemVilas;
      sliderVila.style.transform = `translateX(-${currentIndex * itemVilaWidth}px)`;
      sliderVila.style.transition = animate ? "transform 0.5s ease-in-out" : "none";

      document.querySelectorAll(".sliderVila .itemVila").forEach((itemVila) => {
        (itemVila as HTMLElement).style.minWidth = `${itemVilaWidth}px`;
      });
    };

    const nextSlide = () => {
      currentIndex++;
      updateSliderVila();

      if (currentIndex === totalItemVilas * 2) {
        setTimeout(() => {
          currentIndex = totalItemVilas;
          updateSliderVila(false);
        }, 500);
      }
    };

    const prevSlide = () => {
      currentIndex--;
      updateSliderVila();

      if (currentIndex === 0) {
        setTimeout(() => {
          currentIndex = totalItemVilas;
          updateSliderVila(false);
        }, 500);
      }
    };

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    window.addEventListener("resize", () => updateSliderVila(false));
    updateSliderVila(false);

    return () => {
      nextBtn.removeEventListener("click", nextSlide);
      prevBtn.removeEventListener("click", prevSlide);
      window.removeEventListener("resize", () => updateSliderVila(false));
    };
  }, []);

  return (
    <>
      <div className="section-5">
        <h1>Villas</h1>
        <hr />
        <div className="content">
          <div className="left">
            <p>Choose Villa:</p>
            <div className="btn">
              <button>
                <Link href={`/page/anthea`}>ANTHEA</Link>
              </button>
              <button>
                <Link href={`/page/galini`}>GALINI</Link>
              </button>
            </div>
          </div>
          <div className="right">
            <p>
              The Anthea and Galini Villas offer larger, more luxurious accommodations, ideal for
              families or groups seeking ultimate comfort and privacy.
            </p>
            <div className="containerTitle">
              <div className="titleLeft">
                <div>
                  <p>Attributes:</p>
                  <hr />
                </div>
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
        </div>
        <div className="element-images">
          <img id="prevBtnVila" src="img/left-arrow.svg" alt="" />
          <div className="sliderVila-wrapper">
            <div className="sliderVila">
              <div className="itemVila">
                <img src="/img/LK-94.jpg" alt="" />
              </div>
              <div className="itemVila">
                <img src="/img/LK-35.jpg" alt="" />
              </div>
              <div className="itemVila">
                <img src="/img/LK-64.jpg" alt="" />
              </div>
              <div className="itemVila">
                <img src="/img/LK-93.jpg" alt="" />
              </div>
            </div>
          </div>
          <img id="nextBtnVila" src="/img/left-arrow.svg" alt="" />
        </div>
      </div>
    </>
  );
}