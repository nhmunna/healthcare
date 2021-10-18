import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, text, img, price } = service;
    return (
        <div className="col-lg-6 service">
            <img className="img-fluid" src={img} alt="" />
            <h2>Service Name: {name}</h2>
            <p>{text}</p>
            <h5>Price:{price}</h5>
            <Link to={`/details/${id}`}><Button className="btn btn-warning">Book {name.toLowerCase()}</Button></Link>
        </div>
    );
};

export default Service;