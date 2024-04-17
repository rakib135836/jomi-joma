import { createContext } from "react";

export const FirebaseContext=createContext(null);
const FirebaseProvider = ({children}) => {
    return (
        <FirebaseContext.Provider>
            {children}
        </FirebaseContext.Provider>
    );
};

export default FirebaseProvider;