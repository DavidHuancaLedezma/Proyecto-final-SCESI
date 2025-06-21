import { useState } from 'react'
import { registroDeCuenta, inicioDeSesion } from '../services/auth'

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

    const iniciarSesion = (e) => {
        e.preventDefault()
        console.log(correoElectronico, contrasenia)
        inicioDeSesion(correoElectronico, contrasenia)
        setCorreoElectronico("")
        setContrasenia("")
    }

    return {nombre, correoElectronico, contrasenia, setNombre, setCorreoElectronico, setContrasenia, envioDeRegistro, iniciarSesion}

}