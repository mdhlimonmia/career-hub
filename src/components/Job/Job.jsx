import React from 'react';
import './Job.css'

const Job = (props) => {
    const {img, name, tag, type, timing, location, salary, details} = props.job;
    return (
        <div className='job-container'>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p className='tag'>{tag} </p>
            <a className='job-button'>{type}</a> 
            <a className='job-button'>{timing}</a>
            <p className='location'>{location}      <span>   Salary: {salary}</span></p>
            <button>View Details</button>
        </div>
    );
};

export default Job;