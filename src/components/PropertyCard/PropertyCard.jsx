import { FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {

    const { segment_name, image, area, status, price, location,id } = property;

    return (
        <div className='flex flex-col p-5 border border-gray-400 border-solid  rounded-lg
         cursor-pointer transition duration-300 ease-out transform hover:shadow-2xl hover:scale-105 my-8'>

            <div className='flex-grow'>
                <img src={image} alt="" />
                <div className="text-2xl font-bold text-black">
                    {price}
                    {location}
                </div>
            </div>

            <div>
                <h1 className='text-2xl font-bold text-black'>{segment_name}</h1>
                <hr />
                <div className='flex flex-row justify-between'>
                    <p>{status}</p>
                    <div className='flex items-center gap-2'>
                        <p>{area}</p>
                        <FaStar />
                    </div>
                </div>
            </div>

            <div className="form-control mt-6">
                <Link to={`/property/${id}`}><button className="btn btn-primary">view property</button></Link>
            </div>

        </div>
    );
};

PropertyCard.propTypes = {
    property: PropTypes.shape({
        segment_name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        area: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired
    }).isRequired
};

export default PropertyCard;
