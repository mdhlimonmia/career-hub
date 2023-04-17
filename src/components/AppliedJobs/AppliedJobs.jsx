import React, { useEffect, useState } from 'react';
import ViewAppliedJobs from '../VewAppliedJobs/VewAppliedJobs';
import './AppliedJobs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faCheck} from '@fortawesome/free-solid-svg-icons'

const AppliedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [filter, setFilter] = useState(true)
    const [show, setShow] = useState("200000px")
    const appliedJob=JSON.parse(localStorage.getItem('jobs'))
   useEffect(()=>{
    setJobs(appliedJob);
   },[])

    
//    Filter For Remote Jobs
    const remote = ()=>{
        let filterJobs = appliedJob.filter(job => job.type == "Remote" )
        setJobs(filterJobs);
    }

    // Filter For Onsite Jobs
    const onsite = ()=>{
        let filterJobs = appliedJob.filter(job => job.type == "Onsite");
        setJobs(filterJobs);
    }

    // Filter Button
    const Filter = ()=>{
        setFilter(!filter)
        if(filter){
            setShow("0px")
        }
        else{
            setShow("200000px")
        }
        
    }
    return (
        <div>
            <h1 className='views-container'>Applied Jobs</h1>
            {/* Filter container */}
            <div className='filter-container'>
                <p onClick={Filter}>Filter By <FontAwesomeIcon icon={faChevronDown} /></p>
                <ul className='filter' style={{bottom: show}}>
                    <li onClick={remote}>Remote <FontAwesomeIcon icon={faCheck} /></li>
                    <li onClick={onsite}>Onsite <FontAwesomeIcon icon={faCheck} /></li>
                </ul>
            </div>
            <div className='view-job-container'>
            {
                   jobs.map(job => <ViewAppliedJobs
                        key = {job.id}
                        job ={job}
                     ></ViewAppliedJobs>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;