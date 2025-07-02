import { useEffect, useState } from 'react'
import { getMesas } from '../services/consultas'
import { registrarReserva } from '../services/consultas'
import { serverTimestamp } from 'firebase/firestore'
import { getIdUltimaReserva, setProductosReserva } from '../services/consultas'
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
    })
  }

  useEffect(() => {
    const getDatos = async () => {
      const respuesta = await getMesas()
      console.log(respuesta)
      setMesas(respuesta)
    }
    getDatos()
  }, [])

  const agregarOrdenEnReserva = async (productos) => {
    let listaProductos = ''
    productos.forEach((producto) => {
      listaProductos += producto.cantidad + ' ' + producto.nombre + ', '
    })

    if (listaProductos !== '') {
      listaProductos = listaProductos.slice(0, -2)
      let idUsuario = localStorage.getItem('idUsuario')
      const id = await getIdUltimaReserva(idUsuario)

      if (id.length > 0) {
        setProductosReserva(id[0].id, listaProductos)
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
