import React, { createContext, useState } from "react";

export const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const agregar = (producto) => {
    setCarrito([...carrito, producto]);
    console.log("Agregado al carrito: ", producto);
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregar }}>
      {children}
    </CarritoContext.Provider>
  );
}
