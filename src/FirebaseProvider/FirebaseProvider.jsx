import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

export const FirebaseContext = createContext(null);
const FirebaseProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);

    }
     const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);

     }
    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the on auth state changed', currentUser);
            setUser(currentUser);

        });
        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        createUser,
        signIn,
        logOut
    }
    return (
        <FirebaseContext.Provider value={authInfo}>
            {children}
        </FirebaseContext.Provider>
    );
};

export default FirebaseProvider;