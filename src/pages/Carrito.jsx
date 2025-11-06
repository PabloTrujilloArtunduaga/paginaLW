import React, { useContext, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";
import "../styles/Carrito.css";

export default function Carrito() {
  const { carrito, setCarrito, total, setTotal } = useContext(CarritoContext);
  const [pagoExitoso, setPagoExitoso] = useState(false);

  const actualizarCantidad = (index, delta) => {
    const newCarrito = [...carrito];
    newCarrito[index].cantidad += delta;
    if (newCarrito[index].cantidad < 1) newCarrito[index].cantidad = 1;
    setCarrito(newCarrito);
    const nuevoTotal = newCarrito.reduce(
      (acc, item) => acc + item.precio * item.cantidad,
      0
    );
    setTotal(nuevoTotal);
  };

  const pagar = () => {
    // Simulación de pago online
    setPagoExitoso(true);
    setTimeout(() => {
      alert("✅ Pago realizado con éxito. ¡Gracias por tu compra!");
      setCarrito([]);
      setTotal(0);
      setPagoExitoso(false);
    }, 2500);
  };

  return (
    <div className="carrito-section container">
      <h4 className="center titulo-carrito">🛒 Carrito</h4>
      <hr className="divider" />

      {carrito.length === 0 ? (
        <p className="center vacio">Tu carrito está vacío.</p>
      ) : (
        <div className="carrito-lista">
          {carrito.map((item, index) => (
            <div key={index} className="carrito-item">
              <img src={item.imagen} alt={item.nombre} className="carrito-img" />
              <div className="carrito-info">
                <h6>{item.nombre}</h6>
                <p>Precio: ${item.precio.toLocaleString()}</p>
                <p>
                  Cantidad: 
                  <button onClick={() => actualizarCantidad(index, -1)}>-</button>
                  {item.cantidad}
                  <button onClick={() => actualizarCantidad(index, 1)}>+</button>
                </p>
              </div>
            </div>
          ))}

          <h5 className="total center">
            Total: <b>${total.toLocaleString()}</b>
          </h5>

          <div className="center">
            <button className="btn-pagar" onClick={pagar} disabled={pagoExitoso}>
              {pagoExitoso ? "Procesando pago..." : "Pagar Online 💳"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
