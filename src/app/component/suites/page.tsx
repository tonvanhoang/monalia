'use client'
import { useEffect } from "react";
import "../suites/suites.css";
import Link from "next/link";
export default function ComponentSuites() {
  useEffect(() => {
    const slider = document.querySelector(".slider") as HTMLElement | null;
    const items = document.querySelectorAll(".slider .item");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (!slider || !prevBtn || !nextBtn) return;

    const totalItems = items.length;
    let visibleItems = window.innerWidth <= 768 ? 1 : 3;
    let currentIndex = totalItems;

    // Clone images to create loop effect
    const firstClone = Array.from(items).map((item) => item.cloneNode(true) as HTMLElement);
    const lastClone = Array.from(items).map((item) => item.cloneNode(true) as HTMLElement);

    firstClone.forEach((item) => slider.appendChild(item));
    lastClone.reverse().forEach((item) => slider.insertBefore(item, slider.firstChild));

    const updateSlider = (animate = true) => {
      const sliderWrapper = document.querySelector(".slider-wrapper") as HTMLElement | null;
      if (!sliderWrapper) return;

      visibleItems = window.innerWidth <= 768 ? 1 : 3;
      const itemWidth = sliderWrapper.clientWidth / visibleItems;
      slider.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
      slider.style.transition = animate ? "transform 0.5s ease-in-out" : "none";

      document.querySelectorAll(".slider .item").forEach((item) => {
        (item as HTMLElement).style.minWidth = `${itemWidth}px`;
      });
    };

    const nextSlide = () => {
      currentIndex++;
      updateSlider();

      if (currentIndex === totalItems * 2) {
        setTimeout(() => {
          currentIndex = totalItems;
          updateSlider(false);
        }, 500);
      }
    };

    const prevSlide = () => {
      currentIndex--;
      updateSlider();

      if (currentIndex === 0) {
        setTimeout(() => {
          currentIndex = totalItems;
          updateSlider(false);
        }, 500);
      }
    };

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    window.addEventListener("resize", () => updateSlider(false));
    updateSlider(false);

    return () => {
      nextBtn.removeEventListener("click", nextSlide);
      prevBtn.removeEventListener("click", prevSlide);
      window.removeEventListener("resize", () => updateSlider(false));
    };
  }, []);

  return (
    <>
      <div className="section-4">
        <h1>Suites</h1>
        <hr />
        <div className="content">
          <div className="left">
            <p>Choose A Suite:</p>
            <div className="btn">
              <button>
                <Link href={`/page/gaea`}>GAEA</Link>
              </button>
              <button>
                <Link href={`/page/elea`}>ELEA</Link>
              </button>
            </div>
          </div>
          <div className="right">
            <p>
            The Gaea and Elea Suites combine simplicity with masterful design, creating a space that radiates warmth and serenity.
            </p>
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
        </div>
        <div className="element-images">
          <img id="prevBtn" src="/img/left-arrow.svg" alt="Previous" />
          <div className="slider-wrapper">
            <div className="slider">
              <div className="item">
                <img src="/img/LK-39.jpg" alt="" />
              </div>
              <div className="item">
                <img src="/img/LK-89.jpg" alt="" />
              </div>
              <div className="item">
                <img src="/img/monalia-parga-suites-12.webp" alt="" />
              </div>
              <div className="item">
                <img src="/img/LK-93.jpg" alt="" />
              </div>
            </div>
          </div>
          <img id="nextBtn" src="/img/left-arrow.svg" alt="Next" />
        </div>
      </div>
    </>
  );
}
