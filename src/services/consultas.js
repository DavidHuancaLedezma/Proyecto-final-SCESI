import { collection, getDocs, doc, getDoc, query, addDoc, where, updateDoc, orderBy, limit } from 'firebase/firestore'
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

export const getReserva = async (idUsuario) => {
  const q = query(collection(db, "reserva"), where("idUsuario", "==", idUsuario));
  let res = []
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    res.push({idReserva:doc.id,...doc.data()})
  });
  return res
}

export const getIdUltimaReserva = async () => {
  const q = query(
    collection(db, 'reserva'),
    orderBy('fechaDeCreacion', 'desc'),
    limit(1)
  )
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs[0].id
}

export const setReserva = async (idReserva, productos) => {
    const washingtonRef = doc(db, "reserva", idReserva);
    await updateDoc(washingtonRef, {
      listaProductos: productos
    });
}