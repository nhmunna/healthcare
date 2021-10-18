import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, text, img, price } = service;
    return (
        <div className="col-lg-6 shadow p-3 rounded-3 border border-dark">
            <img className="img-fluid" src={img} alt="" />
            <h2 className="text-primary">{name}</h2>
            <p>{text}</p>
            <h5 className="text-warning">Price:{price}</h5>
            <Link to={`/details/${id}`}><Button className="btn btn-primary shadow">Book {name.toLowerCase()}</Button></Link>
        </div>
    );
};

export default Service;