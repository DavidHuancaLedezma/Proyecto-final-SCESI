import { NavBarAdministrador } from '../../../components'
import { useHistorialReserva } from '../../../hooks/useHistorialReserva'
import style from './PanelReservas.module.css'
function PanelReservas() {
  const { datosReserva } = useHistorialReserva()

  return (
    <>
      <NavBarAdministrador />
      <div className={style.contenedor}>
        <main className={style.datosReserva}>
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
                      <td>{estado ? 'Aceptado' : 'Pendiente'}</td>
                      <td>
                        <select className={style.estado} name="" id="">
                          <option value="">aceptado</option>
                          <option value="">pendiente</option>
                        </select>
                      </td>
                      <td>
                        <button>Guardar</button> <button>Eliminar</button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </main>
        </main>
      </div>
    </>
  )
}

export default PanelReservas
