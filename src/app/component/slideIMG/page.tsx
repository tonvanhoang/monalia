"use client"; // Đánh dấu đây là client component
import '../slideIMG/slideIMG.css'
import { useEffect } from 'react';

export default function ComponentSlideIMG() {
  useEffect(() => {
    const interval = setInterval(() => {
      const carousel = document.querySelector('#carouselExampleCaptions') as HTMLElement;
      const activeItem = carousel.querySelector('.carousel-item.active') as HTMLElement;
      const nextItem = activeItem.nextElementSibling || carousel.querySelector('.carousel-item:first-child') as HTMLElement;
      activeItem.classList.remove('active');
      nextItem.classList.add('active');

      const activeButton = carousel.querySelector('.carousel-indicators .active') as HTMLElement;
      const nextButton = activeButton.nextElementSibling || carousel.querySelector('.carousel-indicators button:first-child') as HTMLElement;
      activeButton.classList.remove('active');
      nextButton.classList.add('active');
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section-6">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
        <div className="carousel-indicators">
          <h1>Gallery</h1>
          <div className='button'>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>
          </div>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/img/LK-93.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/img/LK-85.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/img/monalia-parga-suites-8.webp" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/img/LK-85.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/img/monalia-parga-suites-8.webp" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/img/LK-85.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/img/monalia-parga-suites-8.webp" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/img/LK-85.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/img/monalia-parga-suites-8.webp" className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}