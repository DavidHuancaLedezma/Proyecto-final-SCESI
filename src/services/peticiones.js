import api from "./apiDB";

export const getProductos = () => api.get("/producto");