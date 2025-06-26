import { NavBarLogin, ProductoCard } from '../../components'
import { useProducto } from '../../hooks/useProducto'
import style from './ProductosDeMuestra.module.css'

function ProductosDeMuestra() {
  const { productos } = useProducto()

  return (
    <>
      <NavBarLogin />
      <main className={style.contenedorComidas}>
        {productos.map(
          ({
            idProducto,
            nombre,
            descripcion,
            categoria,
            precio,
            imagen,
            origen,
            disponible,
          }) => (
            <ProductoCard
              key={idProducto}
              nombre={nombre}
              descripcion={descripcion}
              precio={precio}
              imagen={imagen}
              origen={origen}
              categoria={categoria}
              disponible={disponible}
            />
          )
        )}
      </main>
    </>
  )
}

export default ProductosDeMuestra
