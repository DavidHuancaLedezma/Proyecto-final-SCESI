import { Link } from 'react-router-dom'
import style from './NavBarLogin.module.css'

export const NavBarLogin = () => {
  return (
    <main>
      <header className={style.opcionesDeInicio}>
        <h1 className={style.titulo}>Fragmentos</h1>

        <nav>
          <ul className={style.menuBar}>
            <li className={style.opciones}>
              <Link className={style.opcionesTexto} to="/">
                Inicio
              </Link>
            </li>
            <li className={style.opciones}>
              <Link className={style.opcionesTexto} to="/productos-de-muestra">
                Productos
              </Link>
            </li>
            <li className={style.opciones}>
              <Link className={style.opcionesTexto} to="/iniciar-sesion">
                Iniciar sesión
              </Link>
            </li>
            <li className={style.opciones}>
              <Link className={style.opcionesTexto} to="/Registrarse">
                Registrarse
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </main>
  )
}
