// import PropertyCard from "../../components/PropertyCard/PropertyCard";
import { Helmet } from "react-helmet-async";
import Slider from "../../components/Slider/Slider";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title> home</title>
            </Helmet>
            <h1>this is Home</h1>

            <Slider></Slider>
            {/* <PropertyCard></PropertyCard> */}
        </div>
    );
};

export default Home;