import { NavBarLogin } from '../../../components'
import { useUsuario } from '../../../hooks/useUsuario'
import { Link } from 'react-router-dom'
import style from './IniciarSesion.module.css'
function IniciarSesion() {
  const { usuario, setUsuario, iniciarSesion } = useUsuario()

  return (
    <>
      <NavBarLogin />
      <main className={style.contenedor}>
        <form className={style.formulario} onSubmit={iniciarSesion}>
          <h2>Iniciar sesión</h2>

          <section className={style.informacion}>
            <label>Correo electrónico</label>
            <input
              type="text"
              value={usuario.correoElectronico}
              required
              onChange={(e) =>
                setUsuario((prev) => ({
                  ...prev,
                  correoElectronico: e.target.value,
                }))
              }
            />
          </section>

          <section className={style.informacion}>
            <label>Contraseña</label>
            <input
              type="password"
              value={usuario.contrasenia}
              required
              onChange={(e) =>
                setUsuario((prev) => ({ ...prev, contrasenia: e.target.value }))
              }
            />
          </section>

          <button className={style.btnIngresar} type="submit">
            Ingresar
          </button>

          <div className={style.enlace}>
            No tienes una cuenta ?{' '}
            <Link className={style.link} to="/Registrarse">
              Registrate
            </Link>
          </div>
        </form>
      </main>
    </>
  )
}

export default IniciarSesion
