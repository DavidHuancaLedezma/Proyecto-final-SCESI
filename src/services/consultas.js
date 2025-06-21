import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";


export const getProductos = async () => {
    const querySnapshot = await getDocs(collection(db, "producto"))
    let res = [];
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    //console.log(doc.id, " => ", doc.data());
    //res.push([doc.id, doc.data()]);
    res.push({ idProducto: doc.id, ...doc.data() });
    })
    return res    
}
