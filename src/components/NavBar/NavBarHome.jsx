import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaShoppingCart,
  FaUser,
  FaSignOutAlt,
  FaCalendarAlt,
  FaHome,
  FaUtensils,
  FaTimesCircle,
  FaHistory,
  FaBars,
} from 'react-icons/fa'
import { useReserva } from '../../hooks/useReserva'
import { ProductoCardPequenio } from '../Productos/ProductoCardPequenio'
import style from './NavBarHome.module.css'

export const NavBarHome = ({
  productosAgregados,
  eliminarProductoDelCarrito,
  precioTotal,
  contadorProductos,
}) => {
  const [desplegable, setDesplegable] = useState(false)
  const [productosComprados, setProductosComprados] = useState(false)
  const { agregarOrdenEnReserva } = useReserva()
  const manejarClick = () => {
    setDesplegable(!desplegable)
  }

  const manejarClickCarrito = () => {
    setProductosComprados(!productosComprados)
  }

  const obtenerIdProducto = (id) => {
    eliminarProductoDelCarrito(id)
  }

  const buttonClassName = desplegable
    ? 'desplegarOpciones'
    : 'ocultarDesplegable'
  const buttonCarritoPC = productosComprados
    ? 'desplegarPanelCarrito'
    : 'ocultarPanelCarrito'
  const opcionesDeInicio = desplegable
    ? `${style.opcionesDeInicio} ${style.presionado}`
    : style.opcionesDeInicio

  return (
    <div>
      <header className={opcionesDeInicio}>
        <h1 className={style.titulo}>Fragmentos</h1>
        <button className={style.botonAbrir} onClick={manejarClick}>
          <FaBars />
        </button>
        <button className={style.botonCerrar} onClick={manejarClick}>
          <FaTimesCircle />
        </button>

        <ul className={style.opcionesContenedorHorizontalPc}>
          <li className={style.opciones}>
            <Link className={style.opcionesTexto} to="/inicio">
              Inicio
            </Link>
          </li>
          <li className={style.opciones}>
            <Link className={style.opcionesTexto} to="/perfil">
              Perfil
            </Link>
          </li>
          <li className={style.opciones}>
            <Link className={style.opcionesTexto} to="/reserva">
              Reservas
            </Link>
          </li>
          <li className={style.opciones}>
            <Link className={style.opcionesTexto} to="/historial-reserva">
              Historial
            </Link>
          </li>
          <li className={style.opciones}>
            <Link className={style.opcionesTexto} to="/productos">
              Menú
            </Link>
          </li>
          <li className={style.opciones}>
            <Link className={style.opcionesTexto} onClick={manejarClickCarrito}>
              <FaShoppingCart className={style.icono} />
              {contadorProductos > 0 && (
                <span className={style.contador}>{contadorProductos}</span>
              )}
            </Link>
          </li>
        </ul>
        <footer className={style.sesion}>
          <ul className={style.opcionesContenedorHorizontalPc}>
            <li className={style.opciones}>
              <Link className={style.cerrarSesion} to="/">
                <FaSignOutAlt className={style.icono} /> Cerrar sesión
              </Link>
              <Link className={style.cerrarSesionSoloIcono} to="/">
                <FaSignOutAlt className={style.icono} />
              </Link>
            </li>
          </ul>
        </footer>
      </header>

      <aside className={`${style.menuLateral} ${style[buttonClassName]}`}>
        <ul className={style.opcionesContenedor}>
          <li className={style.opciones}>
            <Link className={style.opcionesTexto} to="/inicio">
              <FaHome className={style.icono} /> Inicio
            </Link>
          </li>
          <li className={style.opciones}>
            <Link className={style.opcionesTexto} to="/productos">
              <FaUtensils className={style.icono} /> Menú
            </Link>
          </li>
          <li className={style.opciones}>
            <Link className={style.opcionesTexto} to="/reserva">
              <FaCalendarAlt className={style.icono} /> Reservas
            </Link>
          </li>
          <li className={style.opciones}>
            <Link className={style.opcionesTexto} to="/historial-reserva">
              <FaHistory className={style.icono} /> Historial
            </Link>
          </li>
          <li className={style.opciones}>
            <Link className={style.opcionesTexto} to="/carrito">
              <FaShoppingCart className={style.icono} /> Carrito
            </Link>
          </li>
          <li className={style.opciones}>
            <Link className={style.opcionesTexto} to="/Perfil">
              <FaUser className={style.icono} /> Perfil
            </Link>
          </li>
          <li className={style.opciones}>
            <Link className={style.opcionesTexto} to="/">
              <FaSignOutAlt className={style.icono} /> Cerrar sesión
            </Link>
          </li>
        </ul>
      </aside>
      <section
        className={`${style.productosAdquiridos} ${style[buttonCarritoPC]}`}
      >
        <aside className={style.carrito}>
          <header className={style.tituloCarrito}>
            <h1>
              <FaShoppingCart /> Tu carrito
            </h1>
          </header>
          <main>
            {productosAgregados && productosAgregados.length > 0 ? (
              productosAgregados.map(
                ({ idProducto, nombre, cantidad, imagen, precio }) => (
                  <ProductoCardPequenio
                    key={idProducto}
                    nombre={nombre}
                    cantidad={cantidad}
                    imagen={imagen}
                    precio={precio}
                    idProducto={idProducto}
                    obtenerIdProducto={obtenerIdProducto}
                  />
                )
              )
            ) : (
              <p className={style.vacio}>Carrito sin productos</p>
            )}
          </main>
          <footer className={style.detalle}>
            <section className={style.precio}>
              <span>Total:</span>
              {precioTotal ? (
                <span>{precioTotal} Bs.</span>
              ) : (
                <span>0 Bs.</span>
              )}
            </section>
            <button
              className={style.comprarProductosCarrito}
              onClick={() =>
                agregarOrdenEnReserva(productosAgregados, precioTotal)
              }
            >
              Comprar
            </button>
          </footer>
        </aside>
      </section>
    </div>
  )
}
