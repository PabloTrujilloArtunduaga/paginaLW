import React, { useEffect } from 'react'
import Carrusel from '../components/Carrusel.jsx'
import M from 'materialize-css'

const carrusel1 = [
  '/assets/Producto1.jpg',
  '/assets/Producto2.jpg',
  '/assets/Producto3.jpg'
]

const carrusel2 = [
  '/assets/Local1.jpg',
  '/assets/Local2.jpg',
  '/assets/Local3.jpg'
]

function Galeria() {
  useEffect(() => {
    const elems = document.querySelectorAll('.carousel')
    M.Carousel.init(elems, { fullWidth: true, indicators: true })
  }, [])

  return (
    <div style={{ backgroundColor: '#f5f1e9', minHeight: '100vh' }}>
      <section className="container" style={{ padding: '50px 0' }}>
        <h1 className="center-align">Galería de nuestro Estanco</h1>
        <h5 className="center-align" style={{ marginTop: '40px' }}>Productos destacados</h5>
        <Carrusel imagenes={carrusel1} />
      </section>

      <section className="container" style={{ padding: '50px 0', backgroundColor: '#fff8f0', borderRadius: '10px', margin: '0 auto', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
        <h5 className="center-align" style={{ marginBottom: '30px' }}>Nuestro local</h5>
        <Carrusel imagenes={carrusel2} />
      </section>
    </div>
  )
}

export default Galeria
