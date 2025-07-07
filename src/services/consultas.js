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

export const obtenerProductos = async () => {
  const querySnapshot = await getDocs(collection(db, 'producto'))
  let res = []
  querySnapshot.forEach((doc) => {
    res.push({ idProducto: doc.id, ...doc.data() })
  })
  return res
}

export const editarProducto = async (idProducto, nuevoEstado) => {
  const washingtonRef = doc(db, 'producto', idProducto)
  await updateDoc(washingtonRef, {
    disponible: nuevoEstado,
  })
}

export const eliminarProducto = async (idProducto) => {
  await deleteDoc(doc(db, 'producto', idProducto))
}

export const añadirProducto = async (datosProducto) => {
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

export const obtenerUsuario = async (idUsuario) => {
  const docRef = doc(db, 'usuarios', idUsuario)
  const docSnap = await getDoc(docRef)
  return docSnap.data()
}

export const obtenerTodosLosUsuarios = async () => {
  const q = query(
    collection(db, 'usuarios'),
    where('rol', '!=', 'Administrador')
  )

  const querySnapshot = await getDocs(q)
  let res = []
  querySnapshot.forEach((doc) => {
    res.push({ idUsuario: doc.id, ...doc.data() })
  })
  return res
}

export const eliminarUsuario = async (idUsuario) => {
  await deleteDoc(doc(db, 'usuarios', idUsuario))
}

export const obtenerCategorias = async () => {
  const querySnapshot = await getDocs(collection(db, 'categoria'))
  let res = []
  querySnapshot.forEach((doc) => {
    res.push({ idCategoria: doc.id, ...doc.data() })
  })
  return res
}

export const obtenerMesas = async () => {
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

export const obtenerReserva = async (idUsuario) => {
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

export const obtenerTodasLasReservas = async () => {
  let res = []
  const querySnapshot = await getDocs(collection(db, 'reserva'))
  querySnapshot.forEach((doc) => {
    res.push({ idReserva: doc.id, ...doc.data() })
  })
  return res
}

export const obtenerIdUltimaReserva = async (idUsuario) => {
  const q = query(
    collection(db, 'reserva'),
    where('idUsuario', '==', idUsuario),
    orderBy('fechaDeCreacion', 'desc'),
    limit(1)
  )
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs
}

export const editarProductosReserva = async (idReserva, productos, precioTotal) => {
  const washingtonRef = doc(db, 'reserva', idReserva)
  await updateDoc(washingtonRef, {
    listaProductos: productos,
    precioProductos: precioTotal,
  })
}

export const editarEstadoReserva = async (idReserva, nuevoEstado) => {
  const washingtonRef = doc(db, 'reserva', idReserva)
  await updateDoc(washingtonRef, {
    estado: nuevoEstado,
  })
}

export const eliminarReserva = async (idReserva) => {
  await deleteDoc(doc(db, 'reserva', idReserva))
}
