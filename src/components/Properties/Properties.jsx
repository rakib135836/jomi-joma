import { useState,useEffect } from "react";
import PropertyCard from "../PropertyCard/PropertyCard";


const Properties = () => {

    const [property,setProperty]=useState([]);

    useEffect( ()=>{

        fetch('estate.json')
        .then(res=>res.json())
        .then(data=>setProperty(data))
    },[] )
    return (
        <div>
        <div>
            <h1 className="capitalize text-center text-2xl font-bold"> books </h1>
        </div>

        <div  className="grid grid-cols-3 gap-7 ">
           {
             property.map(property=> <PropertyCard key={property.id} property={property} ></PropertyCard>)
           }
        </div>


    </div>
    );
};

export default Properties;