import { useEffect, useState } from 'react'
import { getReserva, getAllReservas } from '../services/consultas'
export const useHistorialReserva = () => {
  const [datosReserva, setDatosReserva] = useState([])

  const cargarDatos = async () => {
    let rol = localStorage.getItem('rol')
    if (rol === 'Usuario') {
      const idUsuario = localStorage.getItem('idUsuario')
      const respuesta = await getReserva(idUsuario)
      setDatosReserva(respuesta)
    } else if (rol === 'Administrador') {
      const respuesta = await getAllReservas()
      setDatosReserva(respuesta)
    }
  }

  useEffect(() => {
    cargarDatos()
  }, [])

  return { datosReserva, setDatosReserva, cargarDatos }
}
