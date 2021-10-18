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
        <div className="row m-2 g-5 justify-content-md-center">
            <div className="col-lg-6 border border-dark shadow rounded-3 p-3">
                <img className="img-fluid" src={service.img} alt="" />
                <h2 className="text-info">{service.name}</h2>
                <p>{service.text}</p>
                <h5 ><span className="text-warning bg-dark rounded-3 p-1 shadow">Price: {service.price}</span></h5>
            </div>
        </div>
    );
};

export default Details;