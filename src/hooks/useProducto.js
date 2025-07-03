import { useEffect, useState } from 'react'
import { getProductos } from '../services/consultas'

export const useProducto = () => {
  const [productos, setProductos] = useState([])
  const [carritoDeProductos, setCarritoDeProductos] = useState([])
  const [precioTotal, setPrecioTotal] = useState('')

  const agregarProducto = (producto) => {
    const index = carritoDeProductos.findIndex(
      (productosExistentes) => productosExistentes.nombre === producto.nombre
    )

    let productosActualizados = []

    if (index !== -1) {
      const productoConNuevaCantida = {
        ...carritoDeProductos[index],
        cantidad: carritoDeProductos[index].cantidad + 1,
      }
      productosActualizados = [...carritoDeProductos]
      productosActualizados[index] = productoConNuevaCantida
    } else {
      productosActualizados = [...carritoDeProductos]
      productosActualizados.push(producto)
    }

    setCarritoDeProductos(productosActualizados)
    localStorage.setItem('carrito', JSON.stringify(productosActualizados))
    precioTotalProductos(productosActualizados)
  }

  const eliminarProducto = (idProducto) => {
    const index = carritoDeProductos.findIndex(
      (productoParaEliminar) => productoParaEliminar.idProducto === idProducto
    )

    let productosActualizados = [...carritoDeProductos]
    productosActualizados.splice(index, 1)
    setCarritoDeProductos(productosActualizados)
    localStorage.setItem('carrito', JSON.stringify(productosActualizados))
    precioTotalProductos(productosActualizados)
  }

  const precioTotalProductos = (productos) => {
    let precio = 0
    productos.forEach((producto) => {
      precio += producto.precio * producto.cantidad
    })
    setPrecioTotal(precio)
  }

  const getDatos = async () => {
    const respuesta = await getProductos()
    setProductos(respuesta)
  }

  useEffect(() => {
    getDatos()
    let productosSeleccionados = localStorage.getItem('carrito')
    if (productosSeleccionados) {
      setCarritoDeProductos(JSON.parse(productosSeleccionados))
      precioTotalProductos(JSON.parse(productosSeleccionados))
    }
  }, [])

  return {
    productos,
    carritoDeProductos,
    precioTotal,
    setCarritoDeProductos,
    agregarProducto,
    eliminarProducto,
    getDatos,
  }
}
