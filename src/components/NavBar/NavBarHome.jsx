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
} from 'react-icons/fa'
import { useReserva } from '../../hooks/useReserva'
import { ProductoCardPequenio } from '../productos/ProductoCardPequenio'
import style from './NavBarHome.module.css'

export const NavBarHome = ({
  productosAgregados,
  eliminarProductoDelCarrito,
  precioTotal,
}) => {
  const [desplegable, setDesplegable] = useState(false)
  const [productosComprados, setProductosComprados] = useState(false)
  const { agregarOrdenEnReserva } = useReserva()
  const handleClick = () => {
    setDesplegable(!desplegable)
  }

  const handleClickCarrito = () => {
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
    <section>
      <header className={opcionesDeInicio}>
        <h1 className={style.titulo}>Bienvenidos a fragmentos</h1>
        <button className={style.botonAbrir} onClick={handleClick}>
          ☰
        </button>
        <button className={style.botonCerrar} onClick={handleClick}>
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
              Historial de reservas
            </Link>
          </li>
          <li className={style.opciones}>
            <Link className={style.opcionesTexto} to="/productos">
              Menú
            </Link>
          </li>
          <li className={style.opciones}>
            <Link className={style.opcionesTexto} onClick={handleClickCarrito}>
              <FaShoppingCart />
            </Link>
          </li>
        </ul>
        <footer className={style.sesion}>
          <ul className={style.opcionesContenedorHorizontalPc}>
            <li className={style.opciones}>
              <Link className={style.cerrarSesion} to="/">
                Cerrar sesion
              </Link>
            </li>
          </ul>
        </footer>
      </header>

      <aside className={`${style.menuLateral} ${style[buttonClassName]}`}>
        <ul className={style.opcionesContenedor}>
          <li className={style.opciones}>
            <Link className={style.opcionesTexto} to="/inicio">
              <FaHome /> Inicio
            </Link>
          </li>
          <li className={style.opciones}>
            <Link className={style.opcionesTexto} to="/productos">
              <FaUtensils /> Menú
            </Link>
          </li>
          <li className={style.opciones}>
            <Link className={style.opcionesTexto} to="/reserva">
              <FaCalendarAlt /> Reservas
            </Link>
          </li>
          <li className={style.opciones}>
            <Link className={style.opcionesTexto} to="/historial-reserva">
              <FaHistory /> Historial de reservas
            </Link>
          </li>
          <li className={style.opciones}>
            <Link className={style.opcionesTexto} to="/carrito">
              <FaShoppingCart /> Carrito
            </Link>
          </li>
          <li className={style.opciones}>
            <Link className={style.opcionesTexto} to="/Perfil">
              <FaUser /> Perfil
            </Link>
          </li>
          <li className={style.opciones}>
            <Link className={style.opcionesTexto} to="/">
              <FaSignOutAlt /> Cerrar sesión
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
              onClick={() => agregarOrdenEnReserva(productosAgregados)}
            >
              Comprar
            </button>
          </footer>
        </aside>
      </section>
    </section>
  )
}
