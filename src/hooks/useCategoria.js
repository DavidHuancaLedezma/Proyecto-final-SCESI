import { useState, useEffect } from 'react'
import { getCategorias } from '../services/consultas'

export const useCategoria = () => {
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    const getDatos = async () => {
      const respuesta = await getCategorias()
      setCategorias(respuesta)
    }
    getDatos()
  }, [])

  return { categorias }
}
