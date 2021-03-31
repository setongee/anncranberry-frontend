import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyB_R8jdZB4hjWTy035jb7aZM8i3cZZeFwc",
    authDomain: "ann-cranberry-academy.firebaseapp.com",
    projectId: "ann-cranberry-academy",
    storageBucket: "ann-cranberry-academy.appspot.com",
    messagingSenderId: "832240203121",
    appId: "1:832240203121:web:7827c1f92116974eea32d0",
    measurementId: "G-V18C39GMKT"

  };


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();



//creating a user or checking for login using the role to classify signup and login (role = admin or user)

export const createUserProfile = async ( userAuth, addData, role ) => {

    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
    
        const { displayName, email} = userAuth;
        const dateCreated = new Date();

        try {
            await userRef.set({
                displayName, email, dateCreated, role, ...addData
            })
        } 
        catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return await userRef;

}

const provider = new firebase.auth.GoogleAuthProvider();

provider.addScope('profile');
provider.addScope('email');

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;