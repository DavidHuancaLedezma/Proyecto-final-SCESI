import { useState } from 'react';
import { Link } from 'react-router-dom';
import Zoom from '../fullscreem/Zoom';
import '../../normalize.css';
import style from './barra.module.css';

function Barra() {
  const [desplegable, setDesplegable] = useState(false);

  const handleClick = () => {
    setDesplegable(!desplegable);
  };

  const buttonClassName = desplegable ? 'desplegarOpciones' : 'ocultarDesplegable';
  const opcionesDeInicio = desplegable ? `${style.opcionesDeInicio} ${style.presionado}` : style.opcionesDeInicio;

  return (
    <section>
      <header className={opcionesDeInicio}>
        <button className={style.botonAbrir} onClick={handleClick}>☰</button>
        <button className={style.botonCerrar} onClick={handleClick}>←</button>

        <ul className={style.opcionesContenedorHorizontalPc}>
          <li className={style.opciones}><Link className={style.opcionesTexto} to="/inicio">inicio</Link></li>
          <li className={style.opciones}><Link className={style.opcionesTexto} to="/perfil">perfil</Link></li>
          <li className={style.opciones}><Link className={style.opcionesTexto} to="/productos">productos</Link></li>
          <li className={style.opciones}><Link className={style.opcionesTexto} to="/carrito">carrito</Link></li>
        </ul>
        <Zoom />
      </header>

      <aside className={`${style.menuLateral} ${style[buttonClassName]}`}>
        <ul className={style.opcionesContenedor}>
          <li className={style.opciones}><Link className={style.opcionesTexto} to="/inicio">inicio</Link></li>
          <li className={style.opciones}><Link className={style.opcionesTexto} to="/perfil">perfil</Link></li>
          <li className={style.opciones}><Link className={style.opcionesTexto} to="/productos">productos</Link></li>
          <li className={style.opciones}><Link className={style.opcionesTexto} to="/carrito">carrito</Link></li>
        </ul>
      </aside>
    </section>
  );
}

export default Barra;
