import React, { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export default function Carrito() {
  const { carrito, total } = useContext(CarritoContext);

  const pagar = () => {
    const checkout = new WidgetCheckout({
      currency: 'COP',
      amountInCents: total * 100,
      reference: `pedido_${Date.now()}`,
      publicKey: 'pub_test_tuPublicKeyAqui', 
      redirectUrl: 'https://tu-sitio.com/confirmacion'
    });
    checkout.open(result => console.log(result));
  };

  return (
    <div className="container section">
      <h4 className="center">🛒 Carrito</h4>
      <hr/>

      {carrito.length === 0 ? (
        <p className="center">Tu carrito está vacío.</p>
      ) : carrito.map((item, index) => (
        <p key={index}>{item.nombre} — ${item.precio.toLocaleString()}</p>
      ))}

      <h5>Total: <b>${total.toLocaleString()}</b></h5>

      <button id="pagarWompi" className="btn-large green" onClick={pagar}>
        Pagar con Wompi 💳
      </button>
    </div>
  );
}
