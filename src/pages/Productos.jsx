import React, { useState } from 'react'
import ProductoCard from '../components/ProductoCard'

function Productos() {
  const productos = [
    {
      titulo: "Cervezas",
      descripcion: "Gran variedad de cervezas nacionales e importadas.",
      imagen: "/assets/cervezas.jpg",
      submenu: ["Aguila original", "Aguila Light", "Costeña", "Poker", "Heineken", "Corona", "Stella Artois"]
    },
    {
      titulo: "Licores",
      descripcion: "Whisky, ron, aguardiente y mucho más.",
      imagen: "/assets/Liquors.jpg",
      submenu: ["Whisky JackDaniels", "Whisky Buchanans"]
    },
    {
      titulo: "Snacks y más",
      descripcion: "Cigarrillos, snacks y variedades.",
      imagen: "/assets/Snacks_y_mas.jpg",
      submenu: ["Cigarrillos (Marlboro, Chesterfield, L&M)", "Papas Margarita", "Gaseosas personales", "Chicles Trident", "Doritos", "De Todito"]
    }
  ]

  return (
    <div className="section container">
      <h4 className="center">Nuestros Productos</h4>
      <div className="row">
        {productos.map((prod, idx) => (
          <ProductoCard key={idx} producto={prod} />
        ))}
      </div>
    </div>
  )
}

export default Productos
