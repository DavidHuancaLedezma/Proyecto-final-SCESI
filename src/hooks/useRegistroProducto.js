import { useState } from 'react'
import { añadirProducto } from '../services/consultas'
export const useRegistroProducto = () => {
  const [datosProducto, setDatosProducto] = useState({
    categoria: '',
    descripcion: '',
    disponible: true,
    imagen: '',
    nombre: '',
    origen: '',
    precio: '',
  })

  const registrarProducto = (e) => {
    e.preventDefault()
    añadirProducto(datosProducto)
    setDatosProducto({
      categoria: '',
      descripcion: '',
      disponible: true,
      imagen: '',
      nombre: '',
      origen: '',
      precio: '',
    })
  }
  return { datosProducto, setDatosProducto, registrarProducto }
}
