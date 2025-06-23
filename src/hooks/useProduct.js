import { useEffect, useState } from 'react'
import { getProductos } from '../services/consultas'

export const useProduct = () => {
  const [productos, setProductos] = useState([])
  const [ocurrencia, setOcurrencia] = useState('')
  const [categoria, setCategoria] = useState('')

  const filtrarProductos = (producto) => {
    return producto.nombre.toLowerCase().includes(ocurrencia.toLowerCase().trim())
  }
  const filtrarCategorias  = (producto) => {
    return producto.categoria.toLowerCase().includes(categoria.toLowerCase())
  }

  const limpiar = () => {
    setCategoria('')
    setOcurrencia('')
  }

  useEffect(() => {
    const getDatos = async () => {
      const respuesta = await getProductos()
      setProductos(respuesta)
    }
    getDatos()
  }, [])

  return { productos, ocurrencia, setOcurrencia, setCategoria, categoria, filtrarProductos, filtrarCategorias, limpiar }
}
