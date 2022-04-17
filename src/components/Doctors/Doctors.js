import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

const Doctors = () => {
    const [person, setPerson] = useState();
    useEffect(()=>{
        fetch('./doctors.json')
        .then(res => res.json())
        .then(data => setPerson(data))
    },[])
    return (
        <>
        <p className='container text-danger mt-3'>MEET THE DOCTORS</p>
        <h1 className=' container text-success'>OUR EXPERTISE DOCTORS</h1>
        <div className='doctor'>
            {
                person && person.map(doctor =><Doctor 
                doctor={doctor}
                ></Doctor>)
            }
        </div>
        </>
    );
};

export default Doctors;