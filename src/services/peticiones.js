import api from "./apiDB";

export const getProductos = () => api.get("/producto");
export const getCategorias = () => api.get("/categoria");