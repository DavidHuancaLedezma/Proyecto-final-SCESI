import { ProductoCard, BarraBusqueda, NavBarHome } from '../../components'
import { useBusqueda } from '../../hooks/useBusqueda'
import { useProducto } from '../../hooks/useProducto'
import style from './productos.module.css'
function Productos() {
  const {
    productos,
    carritoDeProductos,
    precioTotal,
    agregarProducto,
    eliminarProducto,
  } = useProducto()

  const {
    busquedaPorTexto,
    busquedaPorCategoria,
    filtrarProductosPorTexto,
    filtrarProductosPorCategorias,
    manejarCambioBusquedaPorTexto,
    manejarCambioBusquedaPorCategoria,
    limpiarBusquedas,
  } = useBusqueda()

  return (
    <>
      <NavBarHome
        productosAgregados={carritoDeProductos}
        eliminarProductoDelCarrito={eliminarProducto}
        precioTotal={precioTotal}
      />
      <BarraBusqueda
        cambiosEnTexto={manejarCambioBusquedaPorTexto}
        cambioDeCategoria={manejarCambioBusquedaPorCategoria}
        textoActual={busquedaPorTexto}
        categoriaActual={busquedaPorCategoria}
        limpiar={limpiarBusquedas}
      />
      <main className={style.carteleraDeComidas}>
        {productos
          .filter(filtrarProductosPorTexto)
          .filter(filtrarProductosPorCategorias)
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
