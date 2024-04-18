

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <Helmet>
                <title>error</title>
            </Helmet>
            
            <p>a 404 route/not found page</p>
            <Link to={'/'}>go back to Home</Link>
        </div>
    );
};

export default ErrorPage;