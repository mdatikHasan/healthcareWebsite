import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id, name, description, img, price} = service;
    console.log(service);
    return (
        <div className='service' >
            <img className='image' src={img} alt="" />
            <h4 className='text-primary mt-3 mb-3'>{name}</h4>
            <p className='text-white'>{description}</p>
            <h4 className='text-warning mb-3'>Cost: ${price}</h4>
            <Link to={`/booking/${id}`}><Button variant="success">Booking now</Button></Link>
        </div>
    );
};

export default Service;