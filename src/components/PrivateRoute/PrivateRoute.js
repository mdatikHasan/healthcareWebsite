import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { Route } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import useFirebase from '../../hooks/useFirebase';

const PrivateRoute = ({children}) => {
    const {user, isLoading} = UseAuth();
    if(isLoading){
        return <Spinner animation="border" variant="primary" />
    }
    console.log(user);
    return (
            user.email? children : 
            <Navigate
            to={{pathname: '/login'}
            }
            ></Navigate>
    )
};

export default PrivateRoute;