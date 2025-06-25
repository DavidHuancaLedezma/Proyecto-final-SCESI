import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../services/firebase'
import { getUsuario } from '../services/consultas'
export const useHomeUsuario = () => {
  const [usuario, setUsuario] = useState(null)

  //const cerrarSesion = () => {

  //}

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      console.log('datos usuario actual: ', user.email, user.uid)
      const datos = await getUsuario(user.uid)
      setUsuario(datos)
    })
  }, [])

  return { usuario }
}
