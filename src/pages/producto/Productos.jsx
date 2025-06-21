import {
  ProductoCard,
  BarraBusqueda,
  NavBarHome,
} from '../../components';
//import { useProducto } from '../../hooks/useProducto';
import style from './productos.module.css';
function Productos() {
  const {
    productos,
    categoria,
    buscarProducto,
    buscarCategorias,
    limpiar,
    textoActual,
    categoriaActual,
  } = useProducto();

  const handleBuscadorProducto = (e) => {
    let nombreProducto = e.target.value;
    buscarProducto(nombreProducto);
  };

  const handleCategoria = (e) => {
    let categoria = e.target.value;
    buscarCategorias(categoria);
  };

  return (
    <>
      <NavBarHome />
      <BarraBusqueda
        opciones={categoria}
        cambiosEnTexto={handleBuscadorProducto}
        cambioDeCategoria={handleCategoria}
        textoActual={textoActual}
        categoriaActual={categoriaActual}
        limpiar={limpiar}
      />
      <main className={style.carteleraDeComidas}>
        {productos.map(
          ({
            id_producto,
            nombre,
            descripcion,
            precio,
            imagen,
            origen,
            disponible,
            categoria,
          }) => (
            <ProductoCard
              key={id_producto}
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
  );
}
export default Productos;
