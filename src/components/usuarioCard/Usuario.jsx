import { FaUser, FaCalendar, FaEnvelope, FaUserShield } from 'react-icons/fa';
import style from './usuario.module.css';

function Usuario () {
    return(
        <main className={style.contenedorUsuario}>
            <section className={style.contenedorDatosUsuario}>
                <header className={style.usuario}>
                    <span className={style.iconoContenedor}>
                        <span className={style.icono}>
                            <FaUser/>
                        </span>
                    </span>
                    <h1 className={style.nombre}>Nombre del usuario</h1>
                    <p className={style.complemento}>usuario</p>
                </header>
                <section className={style.informacionCuenta}>
                    <h2 className={style.informacionTitulo}>Información de la cuenta</h2>
                    <hr />
                    <p className={style.informacion}><FaEnvelope className={style.iconoInformacion}/>usuario@gmail.com</p>
                    <p className={style.informacion}><FaCalendar className={style.iconoInformacion}/>Registrado el: 25 de mayo de 2025, 14:00PM</p>
                    <p className={style.informacion}><FaUserShield className={style.iconoInformacion}/>Rol:Usuario</p>
                </section>

            </section>
            
        </main>
    );
}
export default Usuario;