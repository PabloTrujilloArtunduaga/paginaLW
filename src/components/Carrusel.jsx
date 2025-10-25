import React, { useEffect, useRef } from 'react'
import M from 'materialize-css'

const Carrusel = ({ imagenes }) => {
  const carouselRef = useRef(null)

  useEffect(() => {
    // Inicializar Materialize Carousel
    M.Carousel.init(carouselRef.current, {
      fullWidth: true,     // carrusel de ancho completo
      indicators: true     // mostrar los puntos de navegación
    })
  }, [])

  return (
    <div className="carousel carousel-slider" ref={carouselRef}>
      {imagenes.map((img, index) => (
        <a className="carousel-item" href="#!" key={index}>
          <img src={img} alt={`Slide ${index + 1}`} />
        </a>
      ))}
    </div>
  )
}

export default Carrusel
