import { useEffect, useState } from 'react'
import { getProductos } from '../services/consultas'

export const useProduct = () => {
  const [productos, setProductos] = useState([])
  const [ocurrencia, setOcurrencia] = useState('')

  const filtrarProductos = (producto) => {
    return producto.nombre.toLowerCase().includes(ocurrencia.toLowerCase())
  }

  useEffect(() => {
    const getDatos = async () => {
      const respuesta = await getProductos()
      setProductos(respuesta)
    }
    getDatos()
  }, [])

  return { productos, ocurrencia, setOcurrencia, filtrarProductos }
}
