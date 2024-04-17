
import { Helmet } from "react-helmet-async";
import Slider from "../../components/Slider/Slider";
import Properties from "../../components/Properties/Properties";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title> home</title>
            </Helmet>
            <h1>this is Home</h1>

            <Slider></Slider>
           <Properties></Properties>
        </div>
    );
};

export default Home;