import { collection, getDocs, doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from './firebase'
import { mensajeExito } from './mensajes'

export const getProductos = async () => {
  const querySnapshot = await getDocs(collection(db, 'producto'))
  let res = []
  querySnapshot.forEach((doc) => {
    res.push({ idProducto: doc.id, ...doc.data() })
  })
  return res
}

export const getUsuario = async (idUsuario) => {
  const docRef = doc(db, 'usuarios', idUsuario)
  const docSnap = await getDoc(docRef)
  return docSnap.data()
}

export const getCategorias = async () => {
  const querySnapshot = await getDocs(collection(db, 'categoria'))
  let res = []
  querySnapshot.forEach((doc) => {
    res.push({ idCategoria: doc.id, ...doc.data() })
  })
  return res
}

export const getMesas = async () => {
  const querySnapshot = await getDocs(collection(db, 'mesa'))
  let res = []
  querySnapshot.forEach((doc) => {
    res.push({ idMesa: doc.id, ...doc.data() })
  })
  return res
}

export const registrarReserva = async (idUsuario, datosDeRegistro) => {
  try {
    await setDoc(doc(db, 'reserva', idUsuario), datosDeRegistro)
    mensajeExito(
      'Reserva realizada',
      'Tu mesa fue reservada con exito'
    )
  } catch (e) {
    console.error('Error al crear un documento: ', e)
  }
}

