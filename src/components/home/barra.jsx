import { useState } from "react";
import "../../style/normalize/normalize.css"
import "../../style/barra.css"
import Zoom from "../fullscreem/Zoom";
import { Link } from "react-router-dom";
function Barra() {

  const [desplegable, setDesplegable] = useState(false);
 
  const handleClick = () => {
    setDesplegable(!desplegable);
  };

  const buttonClassName = desplegable ? "desplegar-opciones" : "ocultar-desplegable"
  const opcionesDeInicio = desplegable ? "opciones-de-inicio presionado" : "opciones-de-inicio"

  return (
    <section>
      <header className={opcionesDeInicio}>
        <button className="boton-abrir" onClick={handleClick}>☰</button>
        <button className="boton-cerrar" onClick={handleClick}>←</button>

        <ul className="opciones-contenedor-horizontal-pc">
          <li className="opciones"><Link className="opciones-texto" to="/inicio">inicio</Link></li>
          <li className="opciones"><Link className="opciones-texto" to="/perfil">perfil</Link></li>
          <li className="opciones"><Link className="opciones-texto" to="/productos">productos</Link></li>
          <li className="opciones"><Link className="opciones-texto" to="/carrito">carrito</Link></li>
        </ul>
        <Zoom/>

      </header>

      <aside className={`menu-lateral ${buttonClassName}`}>
        <ul className="opciones-contenedor">
          <li className="opciones"><Link className="opciones-texto" to="/inicio">inicio</Link></li>
          <li className="opciones"><Link className="opciones-texto" to="/perfil">perfil</Link></li>
          <li className="opciones"><Link className="opciones-texto" to="/productos">productos</Link></li>
          <li className="opciones"><Link className="opciones-texto" to="/carrito">carrito</Link></li>
        </ul>
      </aside>

    </section>
  );
}

export default Barra