import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaUser,
  FaSignOutAlt,
  FaCalendarAlt,
  FaHome,
  FaUtensils,
  FaTimesCircle,
  FaHistory,
} from 'react-icons/fa'
import style from './NavBarAdministrador.module.css'

export const NavBarAdministrador = ({
  productosAgregados,
  eliminarProductoDelCarrito,
  precioTotal,
}) => {
  const [desplegable, setDesplegable] = useState(false)
  const handleClick = () => {
    setDesplegable(!desplegable)
  }

  const buttonClassName = desplegable
    ? 'desplegarOpciones'
    : 'ocultarDesplegable'
  const opcionesDeInicio = desplegable
    ? `${style.opcionesDeInicio} ${style.presionado}`
    : style.opcionesDeInicio

  return (
    <section>
      <header className={opcionesDeInicio}>
        <h1 className={style.titulo}>Administrador</h1>
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
            <Link className={style.opcionesTexto} to="">
              Perfil
            </Link>
          </li>
          <li className={style.opciones}>
            <Link className={style.opcionesTexto} to="">
              Reservas
            </Link>
          </li>
          <li className={style.opciones}>
            <Link className={style.opcionesTexto} to="">
              Historial de reservas
            </Link>
          </li>
          <li className={style.opciones}>
            <Link className={style.opcionesTexto} to="">
              Menú
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
    </section>
  )
}
