import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import FirebaseProvider from "../FirebaseProvider/FirebaseProvider";


const Root = () => {
    return (
        <div className="font-roboto max-w-7xl mx-auto">
           
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;