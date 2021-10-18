import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/404.jpg';

const NotFound = () => {
    return (
        <div>
            <img className="img-fluid" src={img} alt="" />
            <div className="d-flex justify-content-center">
                <Link to="/"><button className="btn btn-primary">Go Back</button></Link>
            </div>
        </div>
    );
};

export default NotFound;