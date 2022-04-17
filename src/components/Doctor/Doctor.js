import React from 'react';
import './Doctor.css';

const Doctor = ({doctor}) => {
    const {name, title, img} = doctor;
    return (
        <div className='single-doctor'>
            <img height={280} width={480} src={img} alt="" />
            <h2 className='txt mt-3'>{name}</h2>
            <p>{title}</p>
        </div>
    );
};

export default Doctor;