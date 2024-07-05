import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './ComponenteCSS/Carousel.css';
import 'bootstrap'



const CarouselComponent = ({ videos }) => {
  return (
    <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel" data-bs-interval="4500">
<div className="carousel-indicators" style={{marginLeft: "20%"}}>
{videos.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : ''}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div >
      <div className="carousel-inner" >
        {videos.map((video, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}  >
            <video autoPlay loop muted playsInline className="background-video">
              <source src={video.src} type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video>
            <div carousel-caption btn>
              <div className="carousel-caption text-start">
                <h1>{video.caption}</h1>
                <p className="opacity-75">{video.description}</p>
                {video.buttonText && ( // Renderizar botão se houver texto
                  <p><a className="btn btn-lg btn-primary custom-btn" href={video.buttonLink}> {video.buttonText}</a></p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {videos.length > 1 && (
        <>
          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </>
      )}
    </div>
  );
};

export default CarouselComponent;