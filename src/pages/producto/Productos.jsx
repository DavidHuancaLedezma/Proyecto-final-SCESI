import { useState } from 'react';
import { ComponenteProducto, BarraBusqueda} from '../../components';
import { useProducto } from '../../components/hooks/useProducto';
import style from './productos.module.css';
function Productos() {

  const { productos, categoria, buscarProducto } = useProducto();

  const handleBuscadorProducto = (e) => {
    let nombreProducto = e.target.value;
    buscarProducto(nombreProducto);
  }

  return (
    <>
      <BarraBusqueda opciones={categoria} cambiosEnTexto={handleBuscadorProducto}/>
      <main className={style.carteleraDeComidas}>
        {productos.map(({id_producto, nombre, descripcion, precio, imagen, origen, disponible, categoria}) => (
            <ComponenteProducto 
            key={id_producto} 
            nombre={nombre} 
            descripcion={descripcion} 
            precio={precio} 
            imagen={imagen} 
            origen={origen} 
            disponible={disponible} 
            categoria={categoria}/>))
        }
      </main>
    </>
  );
}
export default Productos;
