import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

export const FirebaseContext = createContext(null);
const FirebaseProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading,setLoading]=useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }
     const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);

     }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the on auth state changed', currentUser);
            setUser(currentUser);

            setLoading(false)

        });
        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        createUser,
        signIn,
        loading,
        logOut
    }
    return (
        <FirebaseContext.Provider value={authInfo}>
            {children}
        </FirebaseContext.Provider>
    );
};

export default FirebaseProvider;