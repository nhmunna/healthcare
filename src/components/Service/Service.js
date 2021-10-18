import React from 'react';

const Service = ({ service }) => {
    const { id, name, text, img, price } = service
    return (
        <div className="col-lg-6 service">
            <img className="img-fluid" src={img} alt="" />
            <h2>Service Name: {name}</h2>
            <p>{text}</p>
            <h5>Price:{price}</h5>
        </div>
    );
};

export default Service;