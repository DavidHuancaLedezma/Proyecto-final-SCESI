import { NavBarAdministrador } from '../../../components'
import { LogicaPanelReservas } from '../../../utils/LogicaPanelReservas'
import style from './PanelReservas.module.css'
function PanelReservas() {
  const {
    datosReserva,
    estadosSeleccionados,
    estadoActual,
    guardarEdicion,
    eliminarReservaCliente,
  } = LogicaPanelReservas()

  return (
    <>
      <NavBarAdministrador />
      <div className={style.contenedor}>
        <div className={style.datosReserva}>
          <header className={style.titulo}>Panel de reservas</header>
          <main className={style.contenedorTabla}>
            <table>
              <thead>
                <tr>
                  <th>Nro de mesa</th>
                  <th>Fecha de reserva</th>
                  <th>Hora</th>
                  <th>Usuario</th>
                  <th>Nro de Personas</th>
                  <th>Orden</th>
                  <th>Estado Actual</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {datosReserva.map(
                  ({
                    idReserva,
                    nombreUsuario,
                    mesaSeleccionada,
                    fechaReserva,
                    horaReserva,
                    estado,
                    nroDePersonas,
                    listaProductos,
                  }) => (
                    <tr key={idReserva}>
                      <td>{mesaSeleccionada}</td>
                      <td>
                        {new Date(fechaReserva).toLocaleDateString('es-BO')}
                      </td>
                      <td>{horaReserva}</td>
                      <td className={style.tamanioCeldas}>{nombreUsuario}</td>
                      <td>{nroDePersonas}</td>
                      <td className={style.tamanioCeldas}>
                        {listaProductos ? listaProductos : 'Sin orden'}
                      </td>
                      <td>{estado ? 'Aceptado ✅' : 'Pendiente ⏳'}</td>
                      <td>
                        <select
                          className={style.estado}
                          value={estadosSeleccionados[idReserva]}
                          onChange={(e) => estadoActual(e, idReserva)}
                        >
                          <option value={true}>aceptado</option>
                          <option value={false}>pendiente</option>
                        </select>
                      </td>
                      <td className={style.tamanioCeldasMinimo}>
                        <button
                          className={style.btnGuardar}
                          onClick={() => guardarEdicion(idReserva)}
                        >
                          Guardar
                        </button>{' '}
                        <button
                          className={style.btnEliminar}
                          onClick={() => eliminarReservaCliente(idReserva)}
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

export default PanelReservas
