import React, { useEffect, useState } from 'react';

const useServices = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return [service, setService];
};

export default useServices;