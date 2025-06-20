import { useState } from 'react'
import { registroDeCuenta } from '../services/auth'

export const useUsuario = () => {
    const [nombre, setNombre] = useState("")
    const [correoElectronico, setCorreoElectronico] = useState("")
    const [contrasenia, setContrasenia] = useState("")

    const envioDeRegistro = (e) => {
        e.preventDefault()
        console.log(nombre, correoElectronico, contrasenia)
        registroDeCuenta(nombre, correoElectronico, contrasenia)
        setNombre("")
        setCorreoElectronico("")
        setContrasenia("")
    }

    return {nombre, correoElectronico, contrasenia, setNombre, setCorreoElectronico, setContrasenia, envioDeRegistro}

}
