import React from "react";
import ProductoCard from "../components/ProductoCard";

function Productos() {
  const cervezas = [
    {
      titulo: "Águila Original",
      descripcion: "La clásica cerveza colombiana.",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0oix7BeqXhUh2td085-p5lYPKx8u0D4xOZw&s"
    },
    {
      titulo: "Poker",
      descripcion: "Tradición entre amigos.",
      imagen: "https://distribuidoranikoll.com/wp-content/uploads/2023/04/Bebidas-Alcoholicas-Distribuidora-Nikoll-2-2.jpg"
    },
    {
      titulo: "Corona",
      descripcion: "Suave y refrescante.",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC4-_iiFgBY2uarVnuVamsLTbgW6Ix6kv-Ig&s"
    }
  ];

  const licores = [
    {
      titulo: "Jack Daniel's",
      descripcion: "Whisky premium americano.",
      imagen: "https://img.lalr.co/cms/2022/10/06193559/Jack_Daniels_Rye_Cask_Finish-1.jpg?size=xl"
    },
    {
      titulo: "Buchanan's",
      descripcion: "Perfecto para compartir.",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBC1RrT6joqntEZ8bPKxzRpI3yGIzuErpQcw&s"
    },
    {
      titulo: "Aguardiente Antioqueño",
      descripcion: "El licor de la casa.",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX2pHGLTZU9vhN0XKJVzQu9UNFKaZaSv-L3Q&s"
    }
  ];

  return (
    <div className="section container">
      <h4>Cervezas</h4>
      <div className="row">
        {cervezas.map((prod, idx) => (
          <ProductoCard key={idx} producto={prod} />
        ))}
      </div>

      <h4>Licores</h4>
      <div className="row">
        {licores.map((prod, idx) => (
          <ProductoCard key={idx} producto={prod} />
        ))}
      </div>
    </div>
  );
}

export default Productos;
