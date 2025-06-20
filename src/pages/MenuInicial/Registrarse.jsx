import { NavBarLogin } from '../../components'
import style from './Registrarse.module.css'
function Registrarse() {

  const



  return (
    <>
      <NavBarLogin />
      <main className={style.contenedor}>
            <form className={style.formulario} >
              <h2>Crear Cuenta</h2>

              <section className={style.informacion}>
                <label>Nombre completo</label>
                <input type="text" required />
              </section>

              <section className={style.informacion}>
              <label>Correo electrónico</label>
              <input type="email" required />
              </section>
              

              <section className={style.informacion}>
              <label>Contraseña</label>
              <input type="password" required />
              </section>

              <button className={style.btnRegistrar}>Registrarse</button>
          </form>
        </main>
    </>
  );
}

export default Registrarse;
