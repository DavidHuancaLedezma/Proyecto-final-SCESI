import { collection, getDocs, doc, getDoc, query, addDoc, where } from 'firebase/firestore'
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

export const registrarReserva = async (datosDeRegistro) => {
  try {
    await addDoc(collection(db, 'reserva'), datosDeRegistro)
    mensajeExito(
      'Reserva realizada',
      'Tu mesa fue reservada con exito'
    )
  } catch (e) {
    console.error('Error al crear un documento: ', e)
  }
}

export const getReserva = async (idUsuario) =>{
  /*
  const querySnapshot = await getDocs(collection(db,'reserva',idUsuario))
  let res = []
  querySnapshot.forEach((doc) => {
    res.push({idReserva:doc.id, ...doc.data()})
  })
  return res
  */

  const q = query(collection(db, "reserva"), where("idUsuario", "==", idUsuario));
  let res = []
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    res.push({idReserva:doc.id,...doc.data()})
  });
  return res
}

