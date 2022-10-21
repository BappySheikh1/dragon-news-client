import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const  AuthContext = createContext();
const auth=getAuth(app)
const UseContexts = ({children}) => {
    const [user,setUser]=useState({})
    const [loadding,setLoadding]=useState(true) 
    
    // Google popup login
    const googleProvider= new GoogleAuthProvider();
    const providerLogin=()=>{
        setLoadding(true);
        return signInWithPopup(auth,googleProvider)
    }

    // create user email and passwor
    const createUser=(email,password)=>{
        setLoadding(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // Login user
    const LogInUser=(email,password)=>{
        setLoadding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // user displayName
    const userDisplayName=(profile)=>{
        return updateProfile(auth.currentUser,profile)
    }

    // Verify Email
    const verifyEmail=()=>{
        return sendEmailVerification(auth.currentUser)
    }

    // logout handle
    const LogOut=()=>{
        setLoadding(true)
        return signOut(auth);
    }

    // firebase data 
    useEffect(()=>{
        
        const unsubcribe=onAuthStateChanged(auth,(currentuser)=>{
            if(currentuser === null || currentuser.emailVerified){
                setUser(currentuser)
            }
            setLoadding(false)
        })
        return ()=> unsubcribe();
    },[])
  
    const authInfo={
        user,
        providerLogin
        ,LogOut,
        createUser,
        LogInUser,
        userDisplayName,
        loadding,
        verifyEmail,
        setLoadding
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UseContexts;