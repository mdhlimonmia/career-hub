import React from 'react';
import './Job.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faLocationDot , faDollar} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Job = (props) => {
    const {id,img, name, tag, type, timing, location, salary, details} = props.job;
    return (
        <div className='job-container'>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p className='tag'>{tag} </p>
            <a className='job-button'>{type}</a> 
            <a className='job-button'>{timing}</a>
            <p className='location'><FontAwesomeIcon icon={faLocationDot} /> {location}      <span style={{paddingLeft: "15px"}}> <FontAwesomeIcon icon={faDollar} />  Salary: {salary}</span></p>
            <Link to ={`details/${id}`} ><button>View Details</button></Link>
        </div>
    );
};

export default Job;