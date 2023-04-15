import React from 'react';
import ViewAppliedJobs from '../VewAppliedJobs/VewAppliedJobs';
import './AppliedJobs.css'

const AppliedJobs = () => {
    const appliedJob=JSON.parse(localStorage.getItem('jobs'))
    // appliedJob.map(job => console.log(job));
    // console.log(appliedJob);
    return (
        <div>
            <h1 className='views-container'>Applied Jobs</h1>
            <div className='view-job-container'>
            {
                     appliedJob.map(job => <ViewAppliedJobs
                        key = {job.id}
                        job ={job}
                     ></ViewAppliedJobs>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;