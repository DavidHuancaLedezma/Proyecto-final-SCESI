import { useState, useEffect } from 'react'
import { NavBarAdministrador } from '../../../components'
import { useHistorialReserva } from '../../../hooks/useHistorialReserva'
import { setEstadoReserva, eliminarReserva } from '../../../services/consultas'
import style from './PanelReservas.module.css'
function PanelReservas() {
  const { datosReserva, cargarDatos } = useHistorialReserva()

  const [estadosSeleccionados, setEstadosSeleccionados] = useState({})

  useEffect(() => {
    const estadosIniciales = {}
    datosReserva.forEach((reserva) => {
      estadosIniciales[reserva.idReserva] = reserva.estado
    })
    setEstadosSeleccionados(estadosIniciales)
  }, [datosReserva])

  const estadoActual = (e, idReserva) => {
    let valor = e.target.value === 'true'
    setEstadosSeleccionados((prev) => ({
      ...prev,
      [idReserva]: valor,
    }))
  }

  const guardarEdicion = async (idReserva) => {
    const estadoSeleccionado = estadosSeleccionados[idReserva]
    setEstadoReserva(idReserva, estadoSeleccionado)
    await cargarDatos()
  }
  const eliminarReservaCliente = async (idReserva) => {
    await eliminarReserva(idReserva)
    await cargarDatos()
  }

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
                      <td>
                        <button onClick={() => guardarEdicion(idReserva)}>
                          Guardar
                        </button>{' '}
                        <button
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
        </main>
      </div>
    </>
  )
}

export default PanelReservas
