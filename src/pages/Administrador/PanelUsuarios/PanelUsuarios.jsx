import { NavBarAdministrador } from '../../../components/NavBar/NavBarAdministrador'
import { LogicaPanelUsuarios } from '../../../utils/logicaPanelUsuarios'
import style from './PanelUsuarios.module.css'

function PanelUsuarios() {
  const { usuarios, eliminarUsuariosDelSistema } = LogicaPanelUsuarios()

  return (
    <>
      <NavBarAdministrador />
      <div className={style.contenedor}>
        <div>
          <header className={style.titulo}>Panel de usuarios</header>
          <main className={style.contenedorTabla}>
            <table className={style.tabla}>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Fecha y hora de registro</th>
                  <th>Rol</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map(
                  ({ idUsuario, nombre, email, fechaRegistro, rol }) => (
                    <tr key={idUsuario}>
                      <td>{nombre}</td>
                      <td>{email}</td>
                      <td>{fechaRegistro.toDate().toLocaleString('es-BO')}</td>
                      <td>{rol}</td>

                      <td>
                        <button
                          onClick={() => eliminarUsuariosDelSistema(idUsuario)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </main>
        </div>
      </div>
    </>
  )
}
export default PanelUsuarios
