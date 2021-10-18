import React, { useEffect, useState } from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [service, setService] = useServices([]);
    // useEffect(() => {
    //     fetch('services.json')
    //         .then(res => res.json())
    //         .then(data => setService(data))
    // }, []);
    return (
        <div id="services" className="container my-5">
            <h2 className="text-primary mt-5">Our Services</h2>
            <div className="row g-5">
                {
                    service.map(service => <Service
                        key={service.id}
                        service={service}
                    >
                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;