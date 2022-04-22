import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import services from '../../data';
import './Booking.css'
const Booking = () => {
    const {serviceId} = useParams();
    const [service] = useState(services[Number(serviceId) - 1]);
    const {name, img, price, description} = service;

    
    console.log(service);
    
    return (
        <>
        <h1 className='text-danger'>Best service details</h1>
        <div className='booking'>
            <img className='img1' src={img} alt="" />
                <h4 className='text'>{name}</h4>
                <h4 className='text-warning'>Price: ${price}</h4>
                <p className='text-light'>{description}</p>
                <Link to='/home'> <Button variant="outline-warning">More Info</Button></Link>
        </div>
        </>
    );
    
};

export default Booking;

