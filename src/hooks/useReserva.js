import { useEffect, useState } from "react"
import { getMesas } from "../services/consultas"
export const useReserva = () => {
    const [mesas, setMesas] = useState([])

    useEffect(() => {
       const getDatos = async () => {
        const respuesta = await getMesas()
        console.log(respuesta)
        setMesas(respuesta)
       }
       getDatos() 
    },[])
    
    return { mesas }
}