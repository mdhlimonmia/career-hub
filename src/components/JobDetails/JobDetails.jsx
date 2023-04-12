import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './JobDetails.css'
const JobDetails = () => {
   let {id} = useParams();
    console.log(id);
    const [single, setSingle]=useState([]);
    useEffect(()=>{
        fetch('/public/jobs.json')
        .then(res=> res.json())
        .then(data => setSingle(data))
    },[])
        const newJob = single?.find(job => job.id==id);
        console.log(newJob)
    return (
        <div>
            <h1>Job Details</h1>
            <div className='single-container'>
                <div className='singleJob'>
                    <p><b>Job Description: </b>{newJob?.details?.description}</p>
                    <p><b>Job Responsibility: </b>{newJob?.details?.responsibility}</p>
                    <p><b>Educational Requirements:</b> <br />{newJob?.details?.requirements}</p>
                    <p>{newJob?.details?.experiences}</p>
                
                </div>
                <div className='job-contact'>
                    <h2>Job Details</h2> <hr />
                    <p><b>Salary: </b>{newJob?.salary}</p>
                    <p><b>Job Title : </b>{newJob?.details?.title}</p>
                    <br />
                    <h3><b>Contact Information</b></h3>
                    <hr /> <br />
                    <p><b>Phone : </b>{newJob?.details?.phone}</p>
                    <p><b>Email : </b>{newJob?.details?.email}</p>
                    <p><b>Address : </b>{newJob?.details?.address}</p>
                    <button>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;