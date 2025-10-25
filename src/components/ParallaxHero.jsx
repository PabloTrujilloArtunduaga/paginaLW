import React, { useEffect } from "react";
import M from "materialize-css";

export default function ParallaxHero() {
  useEffect(() => {
    const elemsParallax = document.querySelectorAll(".parallax");
    M.Parallax.init(elemsParallax);

    const elemsSidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elemsSidenav);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="brown darken-3">
        <div className="nav-wrapper container">
          <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li><a href="#productos">Productos</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
      </nav>

      <nav>
        <div className="nav-wrapper blue-grey darken-4">
          <form>
            <div className="input-field">
              <input id="search" type="search" required />
              <label className="label-icon" htmlFor="search">
                <i className="material-icons">search</i>
              </label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li><a href="#productos">Productos</a></li>
        <li><a href="#nosotros">Nosotros</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>

      {/* Hero */}
      <div className="parallax-container">
        <div className="parallax">
          <img src="/images/BeerStore.jpg" alt="Beer Store" />
        </div>
        <div className="container center" style={{ marginTop: "120px" }}>
          <h3 className="delineado white-text">Bienvenido al website de</h3>
          <h3 className="delineado white-text">Estanco MalaCopa</h3>
          <p className="delineado3 flow-text">
            El sitio perfecto sin preocupaciones y una buena bebida
          </p>
        </div>
      </div>
    </>
  );
}
