import React from 'react'

function Contacto() {
  return (
    <div className="section container">
      <h4 className="center">Contáctanos</h4>
      <div className="row">
        <form className="col s12 m8 offset-m2">
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
            <button className="btn brown darken-2 waves-effect waves-light" type="submit">
              Enviar <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contacto
