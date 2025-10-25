import React, { useEffect } from 'react'
import M from 'materialize-css'

function Inicio() {
  useEffect(() => {
    const elems = document.querySelectorAll('.parallax')
    M.Parallax.init(elems)
  }, [])

  return (
    <div className="parallax-container">
      <div className="parallax">
        <img src="/assets/BeerStore.jpg" alt="Hero" />
      </div>
      <div className="container center" style={{ marginTop: '120px' }}>
        <h3 className="delineado white-text">Bienvenido al website de</h3>
        <h3 className="delineado white-text">Estanco MalaCopa</h3>
        <p className="delineado3 flow-text">
          El sitio perfecto sin preocupaciones y una buena bebida
        </p>
      </div>
    </div>
  )
}

export default Inicio
