import React from 'react';
import Person from '../../assets/All Images/P3OLGJ1 copy 1.png';
import './Statistics.css'
import Categories from '../Categories/Categories';

const Statistics = () => {
    return (
       <div>
         <div className='container'>
            <div className='text-container'>
                <h1>Discover New <samp className='primary-color'>Opportunities</samp></h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button>Get Started</button>
            </div>
            <div>
                <img src={Person} alt="" />
            </div>    
        </div>
        <Categories></Categories>
       </div>
    );
};

export default Statistics;