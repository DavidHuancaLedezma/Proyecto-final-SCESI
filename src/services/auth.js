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
        const errorMessage = error.message;
        let titulo = ""
        let descripcion = ""
        if(errorMessage === "Firebase: Error (auth/invalid-email)."){
            titulo = "Correo electrinico inválido"
            descripcion = "El correo electronico ingresado no tiene @."
        }else if (errorMessage === "Firebase: Password should be at least 6 characters (auth/weak-password)."){
            titulo = "Contraseña demasiado corta"
            descripcion = "La contraseña tiene que tener mínimo 6 caracteres."
        }else if (errorMessage === "Firebase: Error (auth/email-already-in-use)."){
            titulo = "Correo electronico existente"
            descripcion = "El correo electronico que ingresaste ya fue registrado con otra cuenta."
        }

        console.log(errorMessage)
        mensajeError(titulo, descripcion)
        
    });

}

export const inicioDeSesion = (email, contrasenia) => {
    signInWithEmailAndPassword(auth, email, contrasenia)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
    })
    .catch((error) => {
        mensajeError("Credenciales incorrectas", "Tus credenciales son incorrectas");
    });
}