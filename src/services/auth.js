import * as firebase from "firebase/app";

export const signIn = async (email, password) => {
    return new Promise((resolve, reject) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(response => resolve(response.user))
            .catch((error) => reject(error));
    })
}