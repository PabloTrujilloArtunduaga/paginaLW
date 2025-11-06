import React, { useEffect } from "react";
import M from "materialize-css";
import { Link, useLocation } from "react-router-dom";


export default function Navbar() {
  const location = useLocation();

  useEffect(() => {
    M.Sidenav.init(document.querySelectorAll(".sidenav"));
  }, []);

  return (
    <>
      <nav className="nav-estanco black">
        <div className="nav-wrapper container">

          {/* ✅ Nombre con tipografía elegante */}
          <Link to="/" className="brand-logo elegant-font white-text">
            Estanco MalaCopa
          </Link>

          <a href="#" data-target="mobile-demo" className="sidenav-trigger white-text">
            <i className="material-icons">menu</i>
          </a>

          <ul className="right hide-on-med-and-down nav-links">
            <li><Link to="/" className="white-text">Inicio</Link></li>
            <li><Link to="/galeria" className="white-text">Galería</Link></li>
            <li><Link to="/productos" className="white-text">Productos</Link></li>
            <li><Link to="/nosotros" className="white-text">Nosotros</Link></li>
            <li><Link to="/contacto" className="white-text">Contacto</Link></li>

            {/* ✅ Carrito visible solo en /productos */}
            {location.pathname === "/productos" && (
              <li><Link to="/carrito" className="white-text">Carrito</Link></li>
            )}
          </ul>

        </div>
      </nav>

      {/* ✅ Menú móvil */}
      <ul className="sidenav nav-mobile" id="mobile-demo">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/galeria">Galería</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        {location.pathname === "/productos" && (
          <li><Link to="/carrito">Carrito 🛒</Link></li>
        )}
      </ul>
    </>
  );
}
