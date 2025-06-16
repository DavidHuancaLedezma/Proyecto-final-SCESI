import { useEffect, useState } from 'react';
import { getProductos } from '../../services/peticiones';

export const useProducto = () => {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);

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

  return { productos, error };
}

