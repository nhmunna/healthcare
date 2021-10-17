import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/404.jpg';

const NotFound = () => {
    return (
        <div>
            <img className="img-fluid" src={img} alt="" />
            <Link to="/"><button>Go Back</button></Link>
        </div>
    );
};

export default NotFound;