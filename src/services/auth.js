import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore"; 
import { mensajeExito, mensajeError } from "./mensajes";

export const registroDeCuenta = (nombre, email, contrasenia) => {
    createUserWithEmailAndPassword(auth, email, contrasenia)
    .then( async (userCredential) => { 
        const user = userCredential.user;

        const datosDeUsuario = {
            nombre:nombre,
            contrasenia:contrasenia,
            email: email
        }
        try {
            await setDoc(doc(db, "usuarios", user.uid), datosDeUsuario);
            mensajeExito("Registro exitoso", "Tu cuenta fue registrada correctamente");
        } catch (e) {
            console.error("Error al crear un documento: ", e);
        }  


    })
    .catch((error) => {
        //const errorCode = error.code;
        //const errorMessage = error.message;
        mensajeError("Correo electronico existente", "El correo electronico que registraste ya fue registrado con otra cuenta")
        
    });

}

export const inicioDeSesion = (email, contrasenia) => {
    signInWithEmailAndPassword(auth, email, contrasenia)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
    })
    .catch((error) => {
        mensajeError("Credenciales incorrectas", "Tus credenciales son incorrectas");
    });
}