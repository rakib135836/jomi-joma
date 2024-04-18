import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
// import FirebaseProvider from "../FirebaseProvider/FirebaseProvider";

import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


const Root = () => {

    useEffect(()=>{
        Aos.init();
    },[])
    return (
        <div className="font-roboto max-w-7xl mx-auto">
           <div className="my-7" data-aos="fade-down-right"><NavBar></NavBar></div>
           <div data-aos="fade-down"><Outlet></Outlet></div>
           <div data-aos="fade-down"><Footer></Footer></div>
            
            
            
        </div>
    );
};

export default Root;