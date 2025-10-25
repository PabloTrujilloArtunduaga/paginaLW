import React, { useState } from 'react'

function ProductoCard({ producto }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="col s12 m4">
      <div className="card">
        <div className="card-image">
          <img src={producto.imagen} alt={producto.titulo} />
          <span 
            className="card-title white-text card-title-clickable"
            onClick={() => setOpen(!open)}
          >
            {producto.titulo}
          </span>
        </div>
        <div className="card-content">
          <p>{producto.descripcion}</p>
          {open && (
            <ul className="submenu show">
              {producto.submenu.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductoCard
