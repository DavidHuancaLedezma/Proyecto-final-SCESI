import { useState } from "react";
import "../../style/barra.css"
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
        <span>zoom</span>
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