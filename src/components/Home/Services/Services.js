import React, { useEffect, useState } from 'react';
import './Services.css'
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('./info.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);
    return (
        <>
        <h2 className='text-success'>Our services</h2>
            <div id='services' className='services-container'>
                {
                services.map((service)=> <Service
                key={service.id}
                    service={service}
                    ></Service>)
                }
            </div>
        </>
        
    );
};

export default Services;