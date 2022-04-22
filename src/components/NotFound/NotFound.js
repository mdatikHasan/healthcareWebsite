import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1 className='text-danger'>error: 404</h1>
            <h4 className='text-danger'>Page not found</h4>
            <Link to='/home'><Button variant="outline-warning">Back to home</Button></Link>
        </div>
    );
};

export default NotFound;