import { NavBarLogin } from '../../components'
import { useUsuario } from '../../hooks/useUsuario';
import style from './Registrarse.module.css'
function Registrarse() {

  const {nombre, correoElectronico, contrasenia, setNombre, setCorreoElectronico, setContrasenia, envioDeRegistro} = useUsuario()

  return (
    <>
      <NavBarLogin />
      <main className={style.contenedor}>
            <form className={style.formulario} onSubmit={envioDeRegistro} >
              <h2>Crear Cuenta</h2>

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
          </form>
        </main>
    </>
  );
}

export default Registrarse;
