import { useEffect, useState } from 'react';
import { getProductos, getCategorias, getBuscadorProductos, getProductosPorCategorias } from '../../services/peticiones';

export const useProducto = () => {
  const [productos, setProductos] = useState([]);
  const [categoria, setCategoria] = useState([]);

  const [textoActual, setTextoActual] = useState('');
  const [categoriaActual, setCategoriaActual] = useState('');

  const limpiar = () => {
    setTextoActual('');
    setCategoriaActual('');
    buscarProducto('');
    buscarCategorias('');
  }

  const buscarProducto = async (nombreProducto) => {
    if(nombreProducto.trim() !== ""){
      const respuesta = await getBuscadorProductos(nombreProducto);
      
      setProductos(respuesta.data);

    }else{
      const respuesta = await getProductos();
      setProductos(respuesta.data);
    }
    setTextoActual(nombreProducto);
  }

  const buscarCategorias = async (id) => {
    if(id !== ""){
      const respuesta = await getProductosPorCategorias(id);
      setProductos(respuesta.data);
    }else{
      const respuesta = await getProductos();
      setProductos(respuesta.data);
    }
    setCategoriaActual(id);
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const respuesta = await getProductos();
        setProductos(respuesta.data);
      } catch (err) {
        setError(err);
      }
    }

    getData();
  }, []);


  useEffect(() => {
      const getData = async () => {
          try {
              const response = await getCategorias();
              setCategoria(response.data);
          } catch (error) {
              console.log("error al obtener los datos");
          }
      }
      getData();
  }, []);

  return { productos, categoria, buscarProducto, buscarCategorias, limpiar, textoActual, categoriaActual };
}

