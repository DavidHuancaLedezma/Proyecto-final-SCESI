import api from "./apiDB";

export const getProductos = () => api.get("/producto");
export const getCategorias = () => api.get("/categoria");
export const getBuscadorProductos = (nombre) => api.get(`/buscadorProducto/${nombre}`);
export const getProductosPorCategorias = (id) => api.get(`/productosCategorias/${id}`);