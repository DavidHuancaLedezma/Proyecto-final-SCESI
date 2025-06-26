import { useState } from 'react'
export const useBusqueda = () => {
  const [busquedaPorTexto, setBusquedaPorTexto] = useState('')
  const [busquedaPorCategoria, setBusquedaPorCategoria] = useState('')

  const filtrarProductosPorTexto = (producto) => {
    return producto.nombre
      .toLowerCase()
      .includes(busquedaPorTexto.toLowerCase().trim())
  }

  const filtrarProductosPorCategorias = (producto) => {
    return producto.categoria
      .toLowerCase()
      .includes(busquedaPorCategoria.toLowerCase())
  }

  const limpiarBusquedas = () => {
    setBusquedaPorTexto('')
    setBusquedaPorCategoria('')
  }

  const manejarCambioBusquedaPorTexto = (e) => {
    setBusquedaPorTexto(e.target.value)
    setBusquedaPorCategoria('')
  }

  const manejarCambioBusquedaPorCategoria = (e) => {
    setBusquedaPorCategoria(e.target.value)
    setBusquedaPorTexto('')
  }

  return {
    busquedaPorTexto,
    busquedaPorCategoria,
    filtrarProductosPorTexto,
    filtrarProductosPorCategorias,
    manejarCambioBusquedaPorTexto,
    manejarCambioBusquedaPorCategoria,
    limpiarBusquedas,
  }
}
