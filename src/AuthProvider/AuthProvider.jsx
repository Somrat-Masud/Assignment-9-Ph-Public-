import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
 

export  const AuthContext = createContext(null)

const auth = getAuth(app)

 const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password)=> {
            setLoading(true)
            return signInWithEmailAndPassword(auth, email, password)
    }
    const googleUser = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider )
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
   
        useEffect( ()=> {
            const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
                setUser(currentUser);
                setLoading(false)
            });
            return ()=> {
                unSubscribe();
            }
        }, [])

    const authItem = {
            user,
            registerUser,
            signInUser,
            googleUser,
            logOut,
            loading,
            

    }

    return (
        <AuthContext.Provider value={authItem}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;