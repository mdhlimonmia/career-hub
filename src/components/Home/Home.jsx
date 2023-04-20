import React from 'react';
import Person from '../../assets/All Images/P3OLGJ1 copy 1.png';
import './Home.css'
import Categories from '../Categories/Categories';
import FeatureJob from '../FeatureJob/FeatureJob';

const Home = () => {
    return (
       <div>
         <div className='container'>
            <div className='text-container'>
                <h1>Discover New <samp className='primary-color'>Opportunities</samp></h1>
                <p>Explore opportunities from across the globe to learn, showcase skills, gain CV points, & get hired by your dream company.</p>
                <button>Get Started</button>
            </div>
            <div>
                <img src={Person} alt="" />
            </div>    
        </div>
        <Categories></Categories>
        <FeatureJob></FeatureJob>
       </div>
    );
};

export default Home;