import React from 'react';
import M from 'materialize-css';

export default function Contacto() {

  const enviarSimulado = (e) => {
    e.preventDefault(); 

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if(!nombre || !email || !mensaje) {
      M.toast({
        html: 'Por favor completa todos los campos',
        classes: 'red darken-2'
      });
      return;
    }

    M.toast({
      html: `Gracias ${nombre}, tu mensaje ha sido enviado!`,
      classes: 'green darken-2'
    });

    // Limpiar el formulario
    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensaje').value = '';
    M.updateTextFields(); 
  };

  return (
    <div className="section container">
      <h4 className="center">Contáctanos</h4>
      <div className="row">
        <form className="col s12 m8 offset-m2" onSubmit={enviarSimulado}>
          <div className="input-field">
            <input id="nombre" type="text" className="validate" />
            <label htmlFor="nombre">Nombre</label>
          </div>
          <div className="input-field">
            <input id="email" type="email" className="validate" />
            <label htmlFor="email">Correo</label>
          </div>
          <div className="input-field">
            <textarea id="mensaje" className="materialize-textarea"></textarea>
            <label htmlFor="mensaje">Mensaje</label>
          </div>
          <div className="center">
            <button 
              className="btn brown darken-2 waves-effect waves-light" 
              type="submit"
            >
              Enviar <i className="material-icons right"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
