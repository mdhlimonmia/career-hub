import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faLocationDot , faDollar} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './VewAppliedJobs.css'
const ViewAppliedJobs = (props) => {
    const {id, img, name, tag, type, timing, location, salary, details} = props.job;
    return (
        <div className='view-job'>
            <div>
              <img src={img} alt="" />
            </div>
            <div className='view-container'>
                <h1>{name}</h1>
                <p className='view-tag'>{tag} </p>
                <a className='view-button'>{type}</a> 
                <a className='view-button'>{timing}</a>
                <p className='view-location'><FontAwesomeIcon icon={faLocationDot} /> {location}      <span style={{paddingLeft: "15px"}}> <FontAwesomeIcon icon={faDollar} />  Salary: {salary}</span></p>
            </div>
            <div>
                 <Link to ={`detail/${id}`} ><button>View Details</button></Link>
            </div>
        </div>
    );
};

export default ViewAppliedJobs;