import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const  AuthContext = createContext();
const auth=getAuth(app)
const UseContexts = ({children}) => {
    const [user,setUser]=useState({})
    
    // Google popup login
    const providerLogin=(provider)=>{
        return signInWithPopup(auth,provider)
    }

    // create user email and passwor
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // Login user
    const LogInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    // user displayName
    const userDisplayName=(name)=>{
        return updateProfile(auth.currentUser,{displayName: name })
    }

    // logout handle
    const LogOut=()=>{
        return signOut(auth);
    }

    // firebase data 
    useEffect(()=>{
        const unsubcribe=onAuthStateChanged(auth,(currentuser)=>{
            setUser(currentuser)
        })
        return ()=> unsubcribe();
    },[])
  
    const authInfo={user,providerLogin,LogOut,createUser,LogInUser,userDisplayName}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UseContexts;