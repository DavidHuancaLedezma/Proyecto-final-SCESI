import { useEffect, useState } from 'react';
import { getProductos, getCategorias, getBuscadorProductos } from '../../services/peticiones';

export const useProducto = () => {
  const [productos, setProductos] = useState([]);
  const [categoria, setCategoria] = useState([]);

  const buscarProducto = async (nombreProducto) => {
    if(nombreProducto.trim() !== ""){
      const respuesta = await getBuscadorProductos(nombreProducto);
      
      setProductos(respuesta.data);

    }else{
      const respuesta = await getProductos();
      setProductos(respuesta.data);
    }
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

  return { productos, categoria, buscarProducto };
}

