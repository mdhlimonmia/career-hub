import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';
import './FeatureJob.css'

const FeatureJob = () => {
    const [jobs, setJobs]=useState([]);
    const [see, setSee] = useState(4);
    useEffect( () =>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    const seeAll=()=>{
       setSee(jobs.length);
    //    console.log(jobs.length);
        
    }
    return (
        <div>
            <h1>Featured Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='jobs-container'>
                {
                     jobs.slice(0,see).map(job => <Job
                        key = {job.id}
                        job ={job}
                    ></Job>)
                }
            </div>
           {see===jobs.length || <button onClick={()=>seeAll()}>See More</button>}
        </div>
    );
};

export default FeatureJob;