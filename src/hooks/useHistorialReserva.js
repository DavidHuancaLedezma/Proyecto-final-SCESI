import { useEffect, useState } from "react"
import { getReserva } from "../services/consultas" 
export const useHistorialReserva = () => {
    const [datosReserva, setDatosReserva] = useState([])

    useEffect(() => {  
        const getDatos = async () => {
            const idUsuario = localStorage.getItem('idUsuario')
            const respuesta = await getReserva(idUsuario)
            setDatosReserva(respuesta)
        }
        getDatos()
    }, [])

    return { datosReserva }

}