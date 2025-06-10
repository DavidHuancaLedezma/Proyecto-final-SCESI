import { useState } from "react";
import "../../style/normalize/normalize.css"
import "../../style/barra.css"
import Zoom from "../fullscreem/zoom";
function Barra() {

  const [desplegable, setDesplegable] = useState(false);
 

  const handleClick = () => {
    setDesplegable(!desplegable);
  };




  const buttonClassName = desplegable ? "desplegar-opciones" : "ocultar-desplegable"
 
  return (
    <section>
      <header className="opciones-de-inicio">
        <button onClick={handleClick}>☰</button>
        <Zoom/>
      </header>

      <aside className={`menu-lateral ${buttonClassName}`}>
        <ul className="opciones-contenedor">
          <li className="opciones"><a className="opciones-texto" href="#">inicio</a></li>
          <li className="opciones"><a className="opciones-texto" href="#">iniciar sesion</a></li>
          <li className="opciones"><a className="opciones-texto" href="#">registrarse</a></li>
          <li className="opciones"><a className="opciones-texto" href="#">Productos</a></li>
        </ul>
      </aside>

    </section>
  );
}

export default Barra