import React from 'react';
import { Button } from 'react-bootstrap';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const {signInUsingGoogle} = useFirebase();
    return (
        <div>
            <h2>This is login</h2>
            <Button onClick={signInUsingGoogle} variant="success">Google signIn</Button>{' '}

        </div>
    );
};

export default Login;