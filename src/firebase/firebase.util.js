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

// export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
//     const collectionRef = firestore.collection(collectionKey);
//     const batch = firestore.batch();
//     objectsToAdd.forEach(obj => {
//         const newDocRef = collectionRef.doc();
//         batch.set(newDocRef, obj);
//     });
//     return await batch.commit();
// }

export const convertCollectionsSnapshotToMap = (collections) => {
    const tansformedCollection = collections.docs.map( doc => {
        const {title, items} = doc.data();
        return {
            routeName : encodeURI(title.toLowerCase()),
            id : doc.id,
            title,
            items
        };
    });
    return tansformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};


firebase.initializeApp(config);

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {unsubscribe();
        resolve(userAuth)}, reject)
    })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();


export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export default firebase;
