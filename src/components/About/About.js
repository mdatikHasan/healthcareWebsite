import React from 'react';
import './About.css';
import { Button } from 'react-bootstrap';

<div className='half-width'>
                <p>TRUSTED HEALTH CARE CENTER</p>
                <h1>We Provided</h1>
                <h1>Quality Care</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nulla quod deserunt consequuntur dolor nisi.</p>
                <Button variant="warning" size="lg">
                Make appointment
                </Button>
            </div>

const About = () => {
    return (
        <>
        <h1>ABOUT US</h1>
        <div className='first-container'>
        <div className='about-container'>
           <div className='half-width'>
                <p className='text-primary'>TRUSTED HEALTH CARE CENTER</p>
                <h1 className='text-danger'>We Provided</h1>
                <h1>Quality Care</h1>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quisquam animi corrupti consectetur, dicta suscipit minus totam sunt. Quia sed modi qui, laboriosam quod assumenda odio voluptatum obcaecati recusandae neque!</p>
                <Button variant="warning" size="lg">
                Make appointment
                </Button>
            </div>
            <div className='half-width'>
                <img height={300} width={540} src="https://dakahanalytica.org/wp-content/uploads/2020/05/banner-healthcare-campaign.jpg" alt="" />
            </div>
        </div>
        <div className='about-container2'>
            <div className='half-width'>
                <img height={400} width={500} src="https://media.istockphoto.com/photos/mature-doctor-and-nurse-discussing-patient-case-picture-id1307543555?b=1&k=20&m=1307543555&s=170667a&w=0&h=KKk1RkwzUkT_a6Kqf0jh7aBEVpIMG048FALjEAPyDp0=" alt="" />
            </div>
            <div className='half-width'>
                <p>GET ON KNOW ABOUT US</p>
                <h1>The Best Medics,</h1>
                <h1>Doctors & Physicians</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nulla quod deserunt consequuntur dolor nisi.</p>
                <ul className='ul-list mb-4'>
                    <li>The personal choices we make have a big impact</li>
                    <li>The hospital maintains a 24/7 Emergency</li>
                    <li>While many clinics offer more general healthcare</li>
                    <Button className='mt-3' variant="success" size="lg">Read more</Button>
                </ul>
            </div>
        </div>
        </div>
        </>
    );
};

export default About;