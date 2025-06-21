import { NavBarLogin } from '../../components'
import { useUsuario } from '../../hooks/useUsuario';
import { Link } from 'react-router-dom';
import style from './Registrarse.module.css'
function Registrarse() {

  const {nombre, correoElectronico, contrasenia, setNombre, setCorreoElectronico, setContrasenia, envioDeRegistro} = useUsuario()

  return (
    <>
      <NavBarLogin />
      <main className={style.contenedor}>
            <form className={style.formulario} onSubmit={envioDeRegistro} >
              <h2>Crear cuenta</h2>

              <section className={style.informacion}>
                <label>Nombre completo</label>
                <input type="text" value={nombre} required onChange={(e) => setNombre(e.target.value)} />
              </section>

              <section className={style.informacion}>
              <label>Correo electrónico</label>
              <input type="text" value={correoElectronico} required onChange={(e) => setCorreoElectronico(e.target.value)} />
              </section>
              

              <section className={style.informacion}>
              <label>Contraseña</label>
              <input type="password" value={contrasenia} required onChange={(e) => setContrasenia(e.target.value)}/>
              </section>

              <button className={style.btnRegistrar} type="submit">Registrarse</button>

              <div className={style.enlace}>
                Ya tienes una cuenta ? <Link className={style.link} to="/iniciar-sesion">Iniciar sesión</Link>
              </div>
          </form>
        </main>
    </>
  );
}

export default Registrarse;
