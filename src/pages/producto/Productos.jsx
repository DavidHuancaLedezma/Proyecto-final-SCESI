import { useEffect, useState } from 'react';
import { ComponenteProducto, BarraBusqueda} from '../../components';
import { useProducto } from '../../components/hooks/useProducto';
import { useCategoria } from '../../components/hooks/useCategoria';
import style from './productos.module.css';
function Productos() {

  const { productos, error } = useProducto();
  const { categoria } = useCategoria();
  console.log(productos);
  console.log(categoria);
  const opciones = [
    {
      id_categoria: 1,
      nombre: 'Carnes',
    },
    {
      id_categoria: 2,
      nombre: 'Completos',
    },
    {
      id_categoria: 3,
      nombre: 'Refrescos',
    },
  ];
  return (
    <>
      <BarraBusqueda opciones={categoria} />
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
