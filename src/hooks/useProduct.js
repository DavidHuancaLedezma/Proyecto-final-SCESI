import { useEffect, useState } from 'react'
import { getProductos } from '../services/consultas'

export const useProduct = () => {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    const getDatos = async () => {
      const respuesta = await getProductos()
      setProductos(respuesta)
    }
    getDatos()
  }, [])

  return { productos }
}
