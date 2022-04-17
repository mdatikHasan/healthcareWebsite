import React, { useEffect, useState } from 'react';
import Shop from '../Shop/Shop';
import './Shops.css'

const Shops = () => {
    const [products, setProducts] = useState();
    useEffect( () =>{
        fetch('./shop.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <>
        <div className='Shop-container'>
            <p className='mt-3'>You can also shop now here</p>
            <h3 className='mb-2'>Our Products</h3>
        </div>
            <div className='services-container'>
            {
                products && products.map((product) => <Shop
                key={product.id}
                product={product}
                ></Shop>)
            }
        </div>
        </>
    );
};

export default Shops;