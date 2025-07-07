import { useEffect, useState } from 'react'
import { obtenerTodosLosUsuarios, eliminarUsuario } from '../services/consultas'
import { mensajeExito } from '../services/mensajes'
export const LogicaPanelUsuarios = () => {
  const [usuarios, setUsuarios] = useState([])

  const obtenerUsuarios = async () => {
    const respuesta = await obtenerTodosLosUsuarios()
    setUsuarios(respuesta)
  }

  const eliminarUsuariosDelSistema = async (idUsuario) => {
    eliminarUsuario(idUsuario)
    mensajeExito('Usuario eliminado', 'El usuario fue eliminado con éxito.')
    await obtenerUsuarios()
  }

  useEffect(() => {
    obtenerUsuarios()
  }, [])

  return { usuarios, obtenerUsuarios, eliminarUsuariosDelSistema }
}
