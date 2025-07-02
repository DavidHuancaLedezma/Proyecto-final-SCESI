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
        </ul>
        <footer>
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
            <Link className={style.opcionesTexto} to="/PerfilAdministrador">
              <FaUser /> Perfil
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
        </ul>
      </aside>
    </section>
  )
}
