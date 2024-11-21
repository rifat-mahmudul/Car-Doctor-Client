/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import { auth } from "../firebase/firebase.config";
import axios from "axios"

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();

    //sign up with email and password
    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //sign in email and password
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    //sign in with google
    const signInGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    //sign Out
    const logOut = () => {
        return signOut(auth);
    }

    //manage users
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        const userEmail = currentUser?.email ;
        const loggedUser = {email : userEmail}
        setUser(currentUser);
        console.log(currentUser);
        setLoading(false);
        if(currentUser){
            axios.post('http://localhost:5000/jwt', loggedUser, {withCredentials: true})
            .then(res => {
                console.log('token response',  res.data.token)
            })
        }
        else{
            axios.post('http://localhost:5000/logout', loggedUser, {withCredentials : true} )
            .then(res => {
                console.log(res.data);
            })
        }
        })
        
        return () => unsubscribe();
    }, [])

    const authInfo = {
        loading,
        user,
        signInGoogle,
        logOut,
        signUp,
        signIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
