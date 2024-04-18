import { useContext } from "react";
import { FirebaseContext } from "../FirebaseProvider/FirebaseProvider";
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {

    const {user}=useContext(FirebaseContext);

    if(user){
        return children;
    }
   
    return <Navigate to='/login'></Navigate>;
   

};

export default PrivateRoutes;