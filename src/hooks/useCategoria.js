import { useState, useEffect } from 'react'
import { obtenerCategorias } from '../services/consultas'

export const useCategoria = () => {
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    const obtenerDatos = async () => {
      const respuesta = await obtenerCategorias()
      setCategorias(respuesta)
    }
    obtenerDatos()
  }, [])

  return { categorias }
}
