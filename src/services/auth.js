import { auth, db } from './firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import { mensajeExito, mensajeError } from './mensajes'
import { obtenerUsuario } from './consultas'

export const registroDeCuenta = (nombre, email, contrasenia) => {
  createUserWithEmailAndPassword(auth, email, contrasenia)
    .then(async (userCredential) => {
      const user = userCredential.user

      const datosDeUsuario = {
        nombre: nombre,
        contrasenia: contrasenia,
        email: email,
        fechaRegistro: serverTimestamp(),
        rol: 'Usuario',
      }
      try {
        await setDoc(doc(db, 'usuarios', user.uid), datosDeUsuario)
        mensajeExito(
          'Registro exitoso',
          'Tu cuenta fue registrada correctamente'
        )
      } catch (e) {
        console.error('Error al crear un documento: ', e)
      }
    })
    .catch((error) => {
      const errorMessage = error.message
      let titulo = ''
      let descripcion = ''
      if (errorMessage === 'Firebase: Error (auth/invalid-email).') {
        titulo = 'Correo electrinico inválido'
        descripcion = 'El correo electronico ingresado no tiene @.'
      } else if (
        errorMessage ===
        'Firebase: Password should be at least 6 characters (auth/weak-password).'
      ) {
        titulo = 'Contraseña demasiado corta'
        descripcion = 'La contraseña tiene que tener mínimo 6 caracteres.'
      } else if (
        errorMessage === 'Firebase: Error (auth/email-already-in-use).'
      ) {
        titulo = 'Correo electronico existente'
        descripcion =
          'El correo electronico que ingresaste ya fue registrado con otra cuenta.'
      }

      mensajeError(titulo, descripcion)
    })
}

export const inicioDeSesion = (email, contrasenia, navigate) => {
  signInWithEmailAndPassword(auth, email, contrasenia)
    .then(async (userCredential) => {
      const user = userCredential.user
      const datos = await obtenerUsuario(user.uid)
      const rol = datos.rol
      if (rol === 'Usuario') {
        navigate('/perfil')
      } else if (rol === 'Administrador') {
        navigate('/perfilAdministrador')
      }
    })
    .catch((error) => {
      const errorMessage = error.message
      console.error(errorMessage)
      mensajeError(
        'Credenciales incorrectas',
        'Tus credenciales son incorrectas'
      )
    })
}

export const usuarioLogueado = (setDatosUsuarioActivo) => {
  onAuthStateChanged(auth, async (user) => {
    localStorage.setItem('idUsuario', user.uid)
    const datos = await obtenerUsuario(user.uid)
    setDatosUsuarioActivo(datos)
  })
}
