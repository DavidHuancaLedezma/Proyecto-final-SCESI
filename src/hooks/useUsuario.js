import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { usuarioLogueado } from '../services/auth'
import { registroDeCuenta, inicioDeSesion } from '../services/auth'

export const useUsuario = () => {
  const [datosUsuarioActivo, setDatosUsuarioActivo] = useState(null)
  const [usuario, setUsuario] = useState({
    nombre: '',
    correoElectronico: '',
    contrasenia: '',
  })

  const navigate = useNavigate()

  const envioDeRegistro = (e) => {
    e.preventDefault()

    console.log(usuario.nombre, usuario.correoElectronico, usuario.contrasenia)
    registroDeCuenta(
      usuario.nombre,
      usuario.correoElectronico,
      usuario.contrasenia
    )
    setUsuario({
      nombre: '',
      correoElectronico: '',
      contrasenia: '',
    })
  }

  const iniciarSesion = (e) => {
    e.preventDefault()
    console.log(usuario.correoElectronico, usuario.contrasenia)
    inicioDeSesion(usuario.correoElectronico, usuario.contrasenia, navigate)
    setUsuario({
      nombre: '',
      correoElectronico: '',
      contrasenia: '',
    })
  }

  useEffect(() => {
    usuarioLogueado(setDatosUsuarioActivo)
  }, [])

  return {
    usuario,
    setUsuario,
    envioDeRegistro,
    iniciarSesion,
    datosUsuarioActivo,
  }
}
