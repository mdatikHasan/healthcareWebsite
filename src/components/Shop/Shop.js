import React from 'react';
import { Button } from 'react-bootstrap';

const Shop = ({product}) => {
    const {name, img, price, description} = product;
    return (
        <div className='service'>
            <img className='image' src={img} alt="" />
            <h4 className='text-danger mt-3 mb-3'>{name}</h4>
            <p className='text-white'>{description}</p>
            <h5 className='text-warning mb-3'>Price: ${price}</h5>
            <Button variant="outline-warning">Buy now</Button>
        </div>
    );
};

export default Shop;