import { FaUser, FaCalendar, FaEnvelope, FaUserShield } from 'react-icons/fa'
import style from './usuario.module.css'

export const Usuario = ({ nombre, correoElectrico, fechaDeRegistro, rol }) => {
  return (
    <main className={style.contenedorUsuario}>
      <section className={style.contenedorDatosUsuario}>
        <header className={style.usuario}>
          <span className={style.iconoContenedor}>
            <span className={style.icono}>
              <FaUser />
            </span>
          </span>
          <h1 className={style.nombre}>{nombre}</h1>
          <p className={style.complemento}>{rol}</p>
        </header>
        <section className={style.informacionCuenta}>
          <h2 className={style.informacionTitulo}>Información de la cuenta</h2>
          <hr />
          <p className={style.informacion}>
            <FaEnvelope className={style.iconoInformacion} />
            {correoElectrico}
          </p>
          <p className={style.informacion}>
            <FaCalendar className={style.iconoInformacion} />
            Registrado el:{fechaDeRegistro}
          </p>
          <p className={style.informacion}>
            <FaUserShield className={style.iconoInformacion} />
            Rol:{rol}
          </p>
        </section>
      </section>
    </main>
  )
}
