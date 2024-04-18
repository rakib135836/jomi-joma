import { useEffect, useState } from "react";

import { addedProperties } from "../../utility/localStorage";
import { useLoaderData, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const PropertyDetails = () => {


  const properties = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);


  const [property, setProperty] = useState(null)
  useEffect(() => {
    const property1 = properties.find(property => property.id === idInt)
    setProperty(property1)
  }, [id])
  console.log(property)


 
    addedProperties(idInt);

  return (
    <div>
<Helmet>
  <title>PropertyDetails</title>
</Helmet>
      

      <div className="card  card-side bg-base-100 shadow-xl">
        <figure><img src={property?.image} alt="Movie" /></figure>
        <div className="card-body">

          <h2 className="card-title">{property?.estate_title}</h2>
          <p>segment : {property?.segment_name}</p> <br /> <hr />
          <p className="font-bold">{property?.price}</p>

          <span className="font-bold"> review</span> <p>{property?.description}</p>

          <div className="flex flex-row ">
            <p className="font-bold">Tags</p>
            <p className="text-green-600">#{property?.facilities[0]}</p>
            <p className="text-green-600">#{property?.facilities[1]}</p>
          </div><br />

          <table>
            <tbody>
              <tr>
                <td>Number of pages:</td>
                <td className="font-bold">{property?.area}</td>
              </tr>
              <tr>
                <td>Publisher:</td>
                <td className="font-bold">{property?.location}</td>
              </tr>
              <tr>
                <td>Year of publish:</td>
                <td className="font-bold">{property?.location}</td>
              </tr>
            </tbody>
          </table>





        </div>
      </div>

    </div>
  );
};

export default PropertyDetails;