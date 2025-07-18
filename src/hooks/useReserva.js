import { useEffect, useState } from 'react'
import { obtenerMesas } from '../services/consultas'
import { registrarReserva } from '../services/consultas'
import { serverTimestamp } from 'firebase/firestore'
import {
  obtenerIdUltimaReserva,
  editarProductosReserva,
} from '../services/consultas'
import { mensajeExito, mensajeError } from '../services/mensajes'

export const useReserva = () => {
  const [mesas, setMesas] = useState([])
  const [datosReserva, setDatosReserva] = useState({
    mesaSeleccionada: '',
    fechaReserva: '',
    fechaDeCreacion: serverTimestamp(),
    horaReserva: '',
    nroDePersonas: '',
    listaProductos: '',
    estado: false,
    idUsuario: localStorage.getItem('idUsuario'),
    nombreUsuario: localStorage.getItem('nombreUsuario'),
    precioProductos: 0,
  })

  const envioFormularioDeReserva = (e) => {
    e.preventDefault()
    registrarReserva(datosReserva)
    setDatosReserva({
      mesaSeleccionada: '',
      fechaReserva: '',
      fechaDeCreacion: serverTimestamp(),
      horaReserva: '',
      nroDePersonas: '',
      listaProductos: '',
      estado: false,
      idUsuario: localStorage.getItem('idUsuario'),
      nombreUsuario: localStorage.getItem('nombreUsuario'),
      precioProductos: 0,
    })
  }

  useEffect(() => {
    const obtenerDatos = async () => {
      const respuesta = await obtenerMesas()
      setMesas(respuesta)
    }
    obtenerDatos()
  }, [])

  const agregarOrdenEnReserva = async (productos, precioTotal) => {
    let listaProductos = ''
    productos.forEach((producto) => {
      listaProductos += producto.cantidad + ' ' + producto.nombre + ', '
    })

    if (listaProductos !== '') {
      listaProductos = listaProductos.slice(0, -2)
      let idUsuario = localStorage.getItem('idUsuario')
      const id = await obtenerIdUltimaReserva(idUsuario)

      if (id.length > 0) {
        editarProductosReserva(id[0].id, listaProductos, precioTotal)
        mensajeExito(
          'Orden realizada',
          'Tus orden fue agregada con exito a tu ultima reserva de mesa.'
        )
      } else {
        mensajeError(
          'Sin reservas',
          'Por favor realiza tu primero tu reserva antes de ordenar algo del menú.'
        )
      }
    } else {
      mensajeError('Carrito vacío', 'Por favor seleciona tu orden del menú.')
    }
  }

  return {
    mesas,
    datosReserva,
    setDatosReserva,
    envioFormularioDeReserva,
    agregarOrdenEnReserva,
  }
}
