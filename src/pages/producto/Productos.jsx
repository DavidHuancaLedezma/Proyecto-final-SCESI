import { ProductoCard, BarraBusqueda, NavBarHome } from '../../components'
import { useProduct } from '../../hooks/useProduct'
import style from './productos.module.css'
function Productos() {
  const {
    productos,
    ocurrencia,
    carritoDeProductos,
    setOcurrencia,
    setCategoria,
    categoria,
    filtrarProductos,
    filtrarCategorias,
    limpiar,
    agregarProducto,
  } = useProduct()

  const manejarCambioEnTexto = (e) => {
    const texto = e.target.value
    setOcurrencia(texto)
    setCategoria('')
  }

  const manejarCambioCategoria = (e) => {
    const texto = e.target.value
    console.log(texto)
    setCategoria(texto)
    setOcurrencia('')
  }

  const agregarProductoAlCarrito = (producto) => {
    console.log(producto)
    agregarProducto(producto)
  }

  return (
    <>
      <NavBarHome productosAgregados={carritoDeProductos} />
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
                agregarProductoAlCarrito={agregarProductoAlCarrito}
              />
            )
          )}
      </main>
    </>
  )
}
export default Productos
