"use client"; // Đánh dấu đây là client component
import '../slideIMG/slideIMG.css'
export default function ComponentSlideIMG() {
  return (
    <div className="section-6">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1000">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
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
        </div>
      </div>
    </div>
  );
}