import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch(`https://api.npoint.io/06182d605012d3f0148a/${serviceId - 1}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);
    return (
        <div className="row my-1 g-5 justify-content-md-center">
            <div className="col-lg-6">
                <img className="img-fluid" src={service.img} alt="" />
                <h2>Service Name: {service.name}</h2>
                <p>{service.text}</p>
                <h5>Price:{service.price}</h5>
            </div>
        </div>
    );
};

export default Details;