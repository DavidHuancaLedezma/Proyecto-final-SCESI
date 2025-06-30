import { useState } from "react"
import { addProdructo } from "../services/consultas"
export const useRegistroProducto = () => {
    const [ datosProducto, setDatosProducto] = useState({
        categoria:'',
        descripcion:'',
        disponible:true,
        imagen:'',
        nombre:'',
        origen:'',
        precio:'',
    })

    const registrarProducto = (e) => {
        e.preventDefault()
        addProdructo(datosProducto)
        setDatosProducto({
            categoria:'',
            descripcion:'',
            disponible:true,
            imagen:'',
            nombre:'',
            origen:'',
            precio:'',
        })

    }
    return { datosProducto, setDatosProducto, registrarProducto}
}