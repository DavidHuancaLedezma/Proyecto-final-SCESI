import { useEffect, useState } from 'react'
import { obtenerTodosLosUsuarios, eliminarUsuario } from '../services/consultas'
export const LogicaPanelUsuarios = () => {
  const [usuarios, setUsuarios] = useState([])

  const obtenerUsuarios = async () => {
    const respuesta = await obtenerTodosLosUsuarios()
    setUsuarios(respuesta)
  }

  const eliminarUsuariosDelSistema = async (idUsuario) => {
    eliminarUsuario(idUsuario)
    await obtenerUsuarios()
  }

  useEffect(() => {
    obtenerUsuarios()
  }, [])

  return { usuarios, obtenerUsuarios, eliminarUsuariosDelSistema }
}
