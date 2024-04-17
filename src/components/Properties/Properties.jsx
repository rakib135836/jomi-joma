import { useEffect, useState } from "react";
import PropertyCard from "../PropertyCard/PropertyCard";


const Properties = () => {

    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetch('estate.json')
            .then(res => res.json())
            .then(data => setProperties(data))
    }, [])
    return (
        <div>
            <h1 className="text-2xl font-bold text-center ">Estate</h1>


            <div className="grid  grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
                {
                    properties.map(property=><PropertyCard key={property.id} property={property}></PropertyCard>)
                }
            </div>
        </div>
    );
};

export default Properties;




