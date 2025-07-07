import { useEffect, useState } from 'react'
import { useProducto } from '../hooks/useProducto'
import { editarProducto, eliminarProducto } from '../services/consultas'
import { mensajeExito } from '../services/mensajes'

export const LogicaPanelProductos = () => {
  const { productos, obtenerDatos } = useProducto()

  const [estadosSeleccionados, setEstadosSeleccionados] = useState({})

  useEffect(() => {
    const estadosIniciales = {}
    productos.forEach((producto) => {
      estadosIniciales[producto.idProducto] = producto.disponible
    })
    setEstadosSeleccionados(estadosIniciales)
  }, [productos])

  const estadoActual = (e, idReserva) => {
    let valor = e.target.value === 'true'
    setEstadosSeleccionados((prev) => ({
      ...prev,
      [idReserva]: valor,
    }))
  }

  const guardarEdicion = async (idProducto) => {
    const estadoSeleccionado = estadosSeleccionados[idProducto]
    editarProducto(idProducto, estadoSeleccionado)
    await obtenerDatos()
  }
  const eliminarProductoDelMenu = async (idReserva) => {
    await eliminarProducto(idReserva)
    mensajeExito('Producto eliminado', 'El producto fue eliminado con éxito.')
    await obtenerDatos()
  }

  return {
    estadosSeleccionados,
    productos,
    estadoActual,
    guardarEdicion,
    eliminarProductoDelMenu,
  }
}
