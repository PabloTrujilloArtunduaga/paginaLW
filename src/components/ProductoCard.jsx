import React, { useEffect } from "react";
import M from "materialize-css";

export default function ProductoCard({ producto }) {
  useEffect(() => {
    M.AutoInit();
  }, []);

  const agregarSimulado = () => {
    M.toast({
      html: `<strong>${producto.titulo}</strong> agregado al carrito`,
      classes: "green darken-2",
    });
  };

  return (
    <div className="col s12 m6 l4">
      <div className="card hoverable producto-card">
        <div className="card-image producto-img-wrapper">
          <img
            src={producto.imagen}
            alt={producto.titulo}
            className="producto-img"
          />
        </div>
        <div className="card-content producto-content">
          <h5 className="producto-titulo">{producto.titulo}</h5>
          <p className="producto-descripcion">{producto.descripcion}</p>
        </div>
        <div className="card-action">
          <button
            className="btn amber darken-2 waves-effect waves-light producto-btn"
            onClick={agregarSimulado}
          >
            Agregar 🛒
          </button>
        </div>
      </div>
    </div>
  );
}
