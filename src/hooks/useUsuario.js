import { useState } from 'react'
import { registroDeCuenta, inicioDeSesion } from '../services/auth'
import { useNavigate } from 'react-router-dom'

export const useUsuario = () => {
    const [nombre, setNombre] = useState("")
    const [correoElectronico, setCorreoElectronico] = useState("")
    const [contrasenia, setContrasenia] = useState("")
    const navigate = useNavigate()

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
        inicioDeSesion(correoElectronico, contrasenia, navigate)
        setCorreoElectronico("")
        setContrasenia("")
    }

    return {nombre, correoElectronico, contrasenia, setNombre, setCorreoElectronico, setContrasenia, envioDeRegistro, iniciarSesion}

}