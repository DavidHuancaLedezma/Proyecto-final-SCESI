import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaUser,
  FaSignOutAlt,
  FaCalendarAlt,
  FaUtensils,
  FaTimesCircle,
  FaUserAlt,
  FaPlusCircle,
} from 'react-icons/fa'
import style from './NavBarAdministrador.module.css'

export const NavBarAdministrador = () => {
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
          <FaTimesCircle className={style.icono} />
        </button>

        <ul className={style.opcionesContenedorHorizontalPc}>
          <li className={style.opciones}>
            <Link className={style.opcionesTexto} to="/PerfilAdministrador">
              Perfil
            </Link>
          </li>
          <li className={style.opciones}>
            <Link className={style.opcionesTexto} to="/RegistroProductos">
              Añadir menú
            </Link>
          </li>
          <li className={style.opciones}>
            <Link className={style.opcionesTexto} to="/PanelReservas">
              Reservas
            </Link>
          </li>
          <li className={style.opciones}>
            <Link className={style.opcionesTexto} to="/PanelProductos">
              Productos
            </Link>
          </li>
          <li className={style.opciones}>
            <Link className={style.opcionesTexto} to="/PanelUsuarios">
              Usuarios
            </Link>
          </li>
        </ul>
        <footer>
          <ul className={style.opcionesContenedorHorizontalPc}>
            <li className={style.opciones}>
              <Link className={style.cerrarSesion} to="/">
                <FaSignOutAlt className={style.icono} />
                Cerrar sesion
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
            <Link className={style.opcionesTexto} to="/PerfilAdministrador">
              <FaUser className={style.icono} /> Perfil
            </Link>
          </li>
          <li className={style.opciones}>
            <Link className={style.opcionesTexto} to="/RegistroProductos">
              <FaPlusCircle className={style.icono} /> Añadir menú
            </Link>
          </li>
          <li className={style.opciones}>
            <Link className={style.opcionesTexto} to="/PanelReservas">
              <FaCalendarAlt className={style.icono} /> Reservas
            </Link>
          </li>
          <li className={style.opciones}>
            <Link className={style.opcionesTexto} to="/PanelProductos">
              <FaUtensils className={style.icono} /> Productos
            </Link>
          </li>
          <li className={style.opciones}>
            <Link className={style.opcionesTexto} to="/PanelUsuarios">
              <FaUserAlt className={style.icono} /> Usuarios
            </Link>
          </li>
          <li className={style.opciones}>
            <Link className={style.opcionesTexto} to="/">
              <FaSignOutAlt className={style.icono} /> Cerrar sesión
            </Link>
          </li>
        </ul>
      </aside>
    </section>
  )
}
