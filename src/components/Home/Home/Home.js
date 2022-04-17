import React from 'react';
import Services from '../Services/Services';
import Banner from '../../Banner/Banner';
import Shops from '../../Shops/Shops';
import About from '../../About/About';
import Doctors from '../../Doctors/Doctors';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;