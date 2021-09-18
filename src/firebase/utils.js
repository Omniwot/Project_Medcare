import firebase from 'firebase/compat/app';
import { firebaseConfig } from './config';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

firebase.initializeApp(firebaseConfig);

export const auth= firebase.auth();
export const firestore= firebase.firestore();

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

export const handleUserProfile= async (userAuth, additionalData)=>{
    if (!userAuth) return;

    const {uid} = userAuth;
    const userRef = firestore.doc(`users/${uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists){
        const{displayName , email} = userAuth;
        const timestamp = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdDate:timestamp,
                ...additionalData
            });
        }catch(err){
            console.log(err);
        }
    }
    return userRef;
};