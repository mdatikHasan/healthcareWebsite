import React from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const {serviceId, name, img} = useParams();
    return (
        <div>
            <img src={img} alt="" /> 
            <h3>Now booking this for me:{serviceId}</h3>
            <h4>{name}</h4>
        </div>
    );
};

export default Booking;