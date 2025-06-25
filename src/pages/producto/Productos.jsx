import { ProductoCard, BarraBusqueda, NavBarHome } from '../../components'
import { useProducto } from '../../hooks/useProducto'
import style from './productos.module.css'
function Productos() {
  const {
    productos,
    ocurrencia,
    carritoDeProductos,
    precioTotal,
    setOcurrencia,
    setCategoria,
    categoria,
    filtrarProductos,
    filtrarCategorias,
    limpiar,
    agregarProducto,
    eliminarProducto,
  } = useProducto()

  const manejarCambioEnTexto = (e) => {
    const texto = e.target.value
    setOcurrencia(texto)
    setCategoria('')
  }

  const manejarCambioCategoria = (e) => {
    const texto = e.target.value
    setCategoria(texto)
    setOcurrencia('')
  }
  /*
  const agregarProductoAlCarrito = (producto) => {
    agregarProducto(producto)
  }

  const eliminarProductoDelCarrito = (idProducto) => {
    eliminarProducto(idProducto)
  }
*/

  return (
    <>
      <NavBarHome
        productosAgregados={carritoDeProductos}
        eliminarProductoDelCarrito={eliminarProducto}
        precioTotal={precioTotal}
      />
      <BarraBusqueda
        cambiosEnTexto={manejarCambioEnTexto}
        cambioDeCategoria={manejarCambioCategoria}
        textoActual={ocurrencia}
        categoriaActual={categoria}
        limpiar={limpiar}
      />
      <main className={style.carteleraDeComidas}>
        {productos
          .filter(filtrarProductos)
          .filter(filtrarCategorias)
          .map(
            ({
              idProducto,
              nombre,
              descripcion,
              precio,
              imagen,
              origen,
              disponible,
              categoria,
            }) => (
              <ProductoCard
                key={idProducto}
                idProducto={idProducto}
                nombre={nombre}
                descripcion={descripcion}
                precio={precio}
                imagen={imagen}
                origen={origen}
                disponible={disponible}
                categoria={categoria}
                agregarProductoAlCarrito={agregarProducto}
              />
            )
          )}
      </main>
    </>
  )
}
export default Productos
