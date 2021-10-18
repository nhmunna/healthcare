import React from 'react';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';

const Doctor = () => {
    const { serviceId } = useParams();
    console.log(serviceId)
    // const [service] = useServices([]);
    return (
        <div>
            <h2>this is your doctor.{serviceId}</h2>
        </div>
    );
};

export default Doctor;