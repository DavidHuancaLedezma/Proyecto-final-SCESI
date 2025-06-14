import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaSignOutAlt, FaCalendarAlt, FaHome, FaUtensils, FaTrash } from 'react-icons/fa';

import '../../normalize.css';
import style from './barra.module.css';

export const Barra = () => {
  const [desplegable, setDesplegable] = useState(false);
  const [productosComprados, setProductosComprados] = useState(false);

  const handleClick = () => {
    setDesplegable(!desplegable);
  };

  const handleClickCarrito = () => {
    setProductosComprados(!productosComprados);
  };

  const buttonClassName = desplegable ? 'desplegarOpciones' : 'ocultarDesplegable';
  const buttonCarritoPC = productosComprados ? 'desplegarPanelCarrito' : 'ocultarPanelCarrito';
  const opcionesDeInicio = desplegable ? `${style.opcionesDeInicio} ${style.presionado}` : style.opcionesDeInicio;

  return (
    <section>
      <header className={opcionesDeInicio}>
        <h1 className={style.titulo}>Bienvenidos a fragmentos</h1>
        <button className={style.botonAbrir} onClick={handleClick}>☰</button>
        <button className={style.botonCerrar} onClick={handleClick}>←</button>

        <ul className={style.opcionesContenedorHorizontalPc}>
          <li className={style.opciones}><Link className={style.opcionesTexto} to="/inicio">inicio</Link></li>
          <li className={style.opciones}><Link className={style.opcionesTexto} to="/perfil">perfil</Link></li>
          <li className={style.opciones}><Link className={style.opcionesTexto} to="/reserva">Reservas</Link></li>
          <li className={style.opciones}><Link className={style.opcionesTexto} to="/productos">productos</Link></li>
          <li className={style.opciones}><Link className={style.opcionesTexto} onClick={handleClickCarrito}><FaShoppingCart/></Link></li>
        </ul>
        <footer className={style.sesion}>
          <button className={style.cerrarSesion}>Cerrar sesión</button>
        </footer>
      </header>

      <aside className={`${style.menuLateral} ${style[buttonClassName]}`}>
        <ul className={style.opcionesContenedor}>
          <li className={style.opciones}><Link className={style.opcionesTexto} to="/inicio"><FaHome/>  Inicio</Link></li>
          <li className={style.opciones}><Link className={style.opcionesTexto} to="/productos"><FaUtensils/>  Productos</Link></li>
          <li className={style.opciones}><Link className={style.opcionesTexto} to="/reserva"><FaCalendarAlt/>  Reservas</Link></li>
          <li className={style.opciones}><Link className={style.opcionesTexto} to="/carrito"><FaShoppingCart/>  Carrito</Link></li>
          <li className={style.opciones}><Link className={style.opcionesTexto} to="/Perfil"><FaUser />  Perfil</Link></li>
          <li className={style.opciones}><Link className={style.opcionesTexto} to=""><FaSignOutAlt/>  Cerrar sesión</Link></li>
        </ul>
      </aside>
      <section className={`${style.productosAdquiridos} ${style[buttonCarritoPC]}`}>
        <aside className={style.carrito}>
          <header className={style.tituloCarrito}>
              <h1><FaShoppingCart/> Tu carrito</h1>
          </header>
          <main>
              <figure className={style.detalleProducto}>
                  <img className={style.comidasCarrito} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQewdvz0HQg1CNrO1U2TTbBfyzw5d9CIINWpw&s" alt="" />
                  <figcaption className={style.descripcionProducto}>
                    <p>Nombre: Una amburguesa</p>
                    <p>Cantidad: 1</p>
                    <p>Subtotal: 20 Bs.</p>
                  </figcaption>
                  <button className={style.eliminarProducto}><FaTrash/></button>  
              </figure>
          </main>
          <footer className={style.detalle}>
              <section className={style.precio}>
                  <span>Total:</span>
                  <span>100Bs.</span>
              </section>
              <button className={style.comprarProductosCarrito}>comprar</button>
          </footer>
        </aside>
      </section>
    </section>
  );
}