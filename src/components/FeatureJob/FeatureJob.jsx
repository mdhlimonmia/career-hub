import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';
import './FeatureJob.css'

const FeatureJob = () => {
    const [jobs, setJobs]=useState([]);
    useEffect( () =>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <h1>Featured Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='jobs-container'>
                {
                    jobs.map(job => <Job
                        key = {job.id}
                        job ={job}
                    ></Job>)
                }
            </div>
        </div>
    );
};

export default FeatureJob;