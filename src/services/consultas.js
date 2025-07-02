import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  addDoc,
  where,
  updateDoc,
  orderBy,
  limit,
  deleteDoc,
} from 'firebase/firestore'
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

export const addProdructo = async (datosProducto) => {
  try {
    await addDoc(collection(db, 'producto'), datosProducto)
    mensajeExito(
      'Producto registrado',
      'El producto fue registrado con éxito en el menú.'
    )
  } catch (e) {
    console.error('Error al crear un documento: ', e)
  }
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
    mensajeExito('Reserva realizada', 'Tu mesa fue reservada con exito')
  } catch (e) {
    console.error('Error al crear un documento: ', e)
  }
}

export const getReserva = async (idUsuario) => {
  const q = query(
    collection(db, 'reserva'),
    where('idUsuario', '==', idUsuario)
  )

  let res = []
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    res.push({ idReserva: doc.id, ...doc.data() })
  })
  return res
}

export const getAllReservas = async () => {
  let res = []
  const querySnapshot = await getDocs(collection(db, 'reserva'))
  querySnapshot.forEach((doc) => {
    res.push({ idReserva: doc.id, ...doc.data() })
  })
  return res
}

export const getIdUltimaReserva = async (idUsuario) => {
  const q = query(
    collection(db, 'reserva'),
    where('idUsuario', '==', idUsuario),
    orderBy('fechaDeCreacion', 'desc'),
    limit(1)
  )
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs
}

export const setProductosReserva = async (idReserva, productos) => {
  const washingtonRef = doc(db, 'reserva', idReserva)
  await updateDoc(washingtonRef, {
    listaProductos: productos,
  })
}

export const setEstadoReserva = async (idReserva, nuevoEstado) => {
  const washingtonRef = doc(db, 'reserva', idReserva)
  await updateDoc(washingtonRef, {
    estado: nuevoEstado,
  })
}

export const eliminarReserva = async (idReserva) => {
  await deleteDoc(doc(db, 'reserva', idReserva))
}
