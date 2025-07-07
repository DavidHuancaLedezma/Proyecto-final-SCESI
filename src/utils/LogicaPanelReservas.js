import { useState, useEffect } from 'react'
import { useHistorialReserva } from '../hooks/useHistorialReserva'
import { editarEstadoReserva, eliminarReserva } from '../services/consultas'
import { mensajeExito } from '../services/mensajes'

export const LogicaPanelReservas = () => {
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
    editarEstadoReserva(idReserva, estadoSeleccionado)
    await cargarDatos()
  }
  const eliminarReservaCliente = async (idReserva) => {
    await eliminarReserva(idReserva)
    mensajeExito(
      'Reserva eliminada',
      'La reserva del cliente fue eliminada con éxito.'
    )
    await cargarDatos()
  }

  return {
    datosReserva,
    estadosSeleccionados,
    estadoActual,
    guardarEdicion,
    eliminarReservaCliente,
  }
}
