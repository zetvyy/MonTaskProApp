import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../config/firebase/firebase";

export const registerPage = (data) => {
    return new Promise((resolve , reject) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => { 
            const user = userCredential.user;
            resolve(user);
        })
        .catch((error) => {
            const errorMessage = error.code;
            reject(errorMessage);
        });
    })
}
export const registerPageWithGogle = () => {
    return new Promise((resolve , reject) => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            resolve(user)
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            reject(errorCode);
        });
    })
}