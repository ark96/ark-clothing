import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = { 
    apiKey: "AIzaSyCJKuMTQ4DsJDGcQWldyY5NEkiVO83phgI",
    authDomain: "ark-db-3bd8b.firebaseapp.com",
    databaseURL: "https://ark-db-3bd8b.firebaseio.com",
    projectId: "ark-db-3bd8b",
    storageBucket: "ark-db-3bd8b.appspot.com",
    messagingSenderId: "184214577242",
    appId: "1:184214577242:web:abd8f212191aa754093863",
    measurementId: "G-YGNZCTVP9X"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        console.log(snapShot);
        try{
            userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log("error creating user", error.message);
        }
    }
    return userRef;
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
