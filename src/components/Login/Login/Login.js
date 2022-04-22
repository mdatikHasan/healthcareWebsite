import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import UseAuth from '../../../hooks/UseAuth';

const Login = () => {
    const {signInUsingGoogle} = UseAuth();
    const location = useLocation();
    const navigate_url = '/home';
    console.log('came from',location.state?. form)

    const handleGoogleSignIn = () =>{
        signInUsingGoogle()
        .then(result =>{
            navigate_url(result.user)
        })
    }
    return (
        <div>
            <div>
                <h3>Login</h3>
                <form className="" onSubmit="">
                    <input type="email" name="" id="" placeholder='Enter your email' />

                    <br />
                    <br />
                    <input type="password" name="" id="" placeholder='Enter password'/>

                    <br />
                    <br />
                    <input type="password" name="" id="" placeholder='Re-enter password' />

                    <br />
                    <br />
                    <input className='btn-warning' type="submit" value="Submit" />
                </form>
                
                <br />
                <p>New to Green Life Hospital? <Link to="/register">Create Account</Link> </p>
                <div>
                <Button onClick={handleGoogleSignIn} variant="success">Success</Button>
                </div>
            </div>
        </div>
    );
};

export default Login;