import { Link } from 'react-router-dom';
import style from './NavBarLogin.module.css';

export const NavBarLogin = () => {
  return (
    <main>
      <header className={style.opcionesDeInicio}>
        <h1 className={style.titulo}>Bienvenidos a fragmentos</h1>

        <section className={style.sesion}>
          <ul className={style.opcionesContenedorHorizontalPc}>
            <li className={style.opciones}>
              <Link className={style.opcionesTexto} to="/inicio">
                Inicio
              </Link>
            </li>
            <li className={style.opciones}>
              <Link className={style.opcionesTexto} to="/productos">
                Productos
              </Link>
            </li>
            <li className={style.opciones}>
              <Link className={style.opcionesTexto} to="/inicio">
                Iniciar sesión
              </Link>
            </li>
            <li className={style.opciones}>
              <Link className={style.opcionesTexto} to="/inicio">
                Registrarse
              </Link>
            </li>
          </ul>
        </section>
      </header>
    </main>
  );
};
