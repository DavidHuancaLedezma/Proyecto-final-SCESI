import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore"; 
import { mensajeExito, mensajeError } from "./mensajes";

export const registroDeCuenta = (email, contraseña, nombre) => {
    createUserWithEmailAndPassword(auth, email, contraseña)
    .then( async (userCredential) => { 
        const user = userCredential.user;

        const datosDeUsuario = {
            nombre:nombre,
            contraseña:contraseña,
            email: email
        }
        try {
            await setDoc(doc(db, "usuarios", user.uid), datosDeUsuario);
            mensajeExito("Registro exitoso", "Tu cuenta fue registrada correctamente");
        } catch (e) {
            console.error("Error adding document: ", e);
        }  


    })
    .catch((error) => {
        //const errorCode = error.code;
        //const errorMessage = error.message;
        mensajeError("Correo electronico existente", "El correo electronico que registraste ya fue registrado con otra cuenta")
        
    });

}

export const inicioDeSesion = (email, contraseña) => {
    signInWithEmailAndPassword(auth, email, contraseña)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
    })
    .catch((error) => {
        mensajeError("Credenciales incorrectas", "Tus credenciales son incorrectas");
    });
}

