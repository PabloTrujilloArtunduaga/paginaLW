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
      <nav className="nav-estanco">
        <div className="nav-wrapper container">

          <Link to="/" className="brand-logo">
            Estanco MalaCopa
          </Link>

          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>

          <ul className="right hide-on-med-and-down nav-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/galeria">Galería</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>

            {/* ✅ Carrito solo en /productos */}
            {location.pathname === "/productos" && (
              <li><Link to="/carrito">Carrito</Link></li>
            )}
          </ul>

        </div>
      </nav>

      <ul className="sidenav nav-mobile" id="mobile-demo">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/galeria">Galería</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>

        {/* ✅ También para menú móvil */}
        {location.pathname === "/productos" && (
          <li><Link to="/carrito">Carrito 🛒</Link></li>
        )}
      </ul>
    </>
  );
}