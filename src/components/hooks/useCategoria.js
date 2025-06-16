import { useEffect, useState } from "react"
import { getCategorias } from "../../services/peticiones";
export const useCategoria = () => {
    const [categoria, setCategoria] = useState([]);
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
    return { categoria };
}