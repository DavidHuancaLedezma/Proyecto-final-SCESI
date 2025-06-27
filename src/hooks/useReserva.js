import { useEffect, useState } from "react"
import { getMesas } from "../services/consultas"
import { registrarReserva } from "../services/consultas"

export const useReserva = () => {
    const [mesas, setMesas] = useState([])
    const [datosReserva, setDatosReserva] = useState({
        mesaSeleccionada:'',
        fechaReserva:'',
        horaReserva:'',
        nroDePersonas:'',
    })

    
    const envioFormularioDeReserva = (e) => {
        e.preventDefault()
        const idUsuario = localStorage.getItem('idUsuario')
        registrarReserva(idUsuario, datosReserva)
        setDatosReserva({
            mesaSeleccionada:'',
            fechaReserva:'',
            horaReserva:'',
            nroDePersonas:'',
        })
        
    }

    useEffect(() => {
       const getDatos = async () => {
        const respuesta = await getMesas()
        console.log(respuesta)
        setMesas(respuesta)
       }
       getDatos() 
    },[])
    
    return { mesas,datosReserva, setDatosReserva, envioFormularioDeReserva }
}