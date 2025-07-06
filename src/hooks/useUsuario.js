import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  registroDeCuenta,
  inicioDeSesion,
  usuarioLogueado,
} from '../services/auth'

export const useUsuario = () => {
  const [datosUsuarioActivo, setDatosUsuarioActivo] = useState('')
  const [usuario, setUsuario] = useState({
    nombre: '',
    correoElectronico: '',
    contrasenia: '',
  })

  const navigate = useNavigate()

  const envioDeRegistro = (e) => {
    e.preventDefault()

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
