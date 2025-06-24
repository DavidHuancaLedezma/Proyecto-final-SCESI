import { useEffect, useState } from 'react'
import { getProductos } from '../services/consultas'

export const useProduct = () => {
  const [productos, setProductos] = useState([])
  const [ocurrencia, setOcurrencia] = useState('')
  const [categoria, setCategoria] = useState('')
  const [carritoDeProductos, setCarritoDeProductos] = useState([])

  const agregarProducto = (producto) => {

    const index = carritoDeProductos.findIndex(
      (productosExistentes) => productosExistentes.nombre === producto.nombre
    )

    let productosActualizados = []

    if(index !== -1){
      const productoConNuevaCantida = {
        ...carritoDeProductos[index],
        cantidad: carritoDeProductos[index].cantidad + 1
      }
      productosActualizados = [...carritoDeProductos]
      productosActualizados[index] = productoConNuevaCantida
    }else{
      productosActualizados = [...carritoDeProductos]
      productosActualizados.push(producto)
    }
    setCarritoDeProductos(productosActualizados)
  }

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

  return { productos, ocurrencia, carritoDeProductos, setOcurrencia, setCategoria, setCarritoDeProductos, categoria, filtrarProductos, filtrarCategorias, limpiar, agregarProducto }
}
