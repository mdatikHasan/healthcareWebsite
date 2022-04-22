import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Shop = ({product}) => {
    const {name, img, price, description} = product;
    return (
        <div className='service'>
            <img className='image' src={img} alt="" />
            <h4 className='text-danger mt-3 mb-3'>{name}</h4>
            <p className='text-white'>{description}</p>
            <h5 className='text-warning mb-3'>Price: ${price}</h5>
            <Link to="/services"><Button variant="outline-warning">Buy now</Button></Link>
        </div>
    );
};

export default Shop;