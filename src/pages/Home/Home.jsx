

import Slider from "../../components/Slider/Slider";
import Properties from "../../components/Properties/Properties";
import { Helmet } from "react-helmet-async";




const Home = () => {
    return (
        <div>
        <Helmet>
            <title>home</title>
        </Helmet>
            

            <Slider></Slider>
           <Properties></Properties>
        </div>
    );
};

export default Home;