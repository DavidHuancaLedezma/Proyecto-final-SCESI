import { ProductoCard, BarraBusqueda, NavBarHome } from '../../components'
import { useProduct } from '../../hooks/useProduct'
import style from './productos.module.css'
function Productos() {
  const { productos } = useProduct()

  return (
    <>
      <NavBarHome />
      <BarraBusqueda />
      <main className={style.carteleraDeComidas}>
        {productos.map(
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
