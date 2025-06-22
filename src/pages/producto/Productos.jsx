import { ProductoCard, BarraBusqueda, NavBarHome } from '../../components'
import { useProduct } from '../../hooks/useProduct'
import style from './productos.module.css'
function Productos() {
  const { productos, ocurrencia, setOcurrencia, filtrarProductos } =
    useProduct()

  const manejarCambioEnTexto = (e) => {
    const texto = e.target.value
    setOcurrencia(texto)
    console.log(ocurrencia)
  }

  return (
    <>
      <NavBarHome />
      <BarraBusqueda cambiosEnTexto={manejarCambioEnTexto} />
      <main className={style.carteleraDeComidas}>
        {productos
          .filter(filtrarProductos)
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
                nombre={nombre}
                descripcion={descripcion}
                precio={precio}
                imagen={imagen}
                origen={origen}
                disponible={disponible}
                categoria={categoria}
              />
            )
          )}
      </main>
    </>
  )
}
export default Productos
