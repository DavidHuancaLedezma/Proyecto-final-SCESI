import { NavBarLogin } from '../../components'
import { useUsuario } from '../../hooks/useUsuario';
import { Link } from 'react-router-dom';
import style from './IniciarSesion.module.css'
function IniciarSesion() {

  const {correoElectronico, contrasenia, setCorreoElectronico, setContrasenia, iniciarSesion} = useUsuario()

  return (
    <>
      <NavBarLogin />
      <main className={style.contenedor}>
            <form className={style.formulario} onSubmit={iniciarSesion} >
              <h2>Iniciar sesión</h2>

              <section className={style.informacion}>
                <label>Correo electrónico</label>
                <input type="text" value={correoElectronico} required onChange={(e) => setCorreoElectronico(e.target.value)} />
              </section>

              <section className={style.informacion}>
                <label>Contraseña</label>
                <input type="password" value={contrasenia} required onChange={(e) => setContrasenia(e.target.value)}/>
              </section>

              <button className={style.btnIngresar} type="submit">Ingresar</button>

              <div className={style.enlace}>
                No tienes una cuenta ? <Link className={style.link} to="/Registrarse">Registrate</Link>
              </div>
          </form>
        </main>
    </>
  );
}

export default IniciarSesion;
