import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './JobDetails.css'
import { toast } from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollar, faCalendarDays, faPhone, faEnvelopeOpen, faLocationDot} from '@fortawesome/free-solid-svg-icons'

const JobDetails = () => {
   let {id} = useParams();
        const single = useLoaderData();
        const newJob = single?.find(job => job.id==id);
        // console.log(newJob)
        let jobApply=[]

        const handelAppid = (job)=>{
        const  jobApplied=   JSON.parse(localStorage.getItem('jobs'))
        console.log(jobApplied)
        const isJob = jobApplied?.find(single => single.id == newJob.id)
        
            if(jobApplied){
                if(isJob){
                   return toast.error("Already Applied!!!")
                }else{
                    jobApply = (jobApplied)
                    jobApply.push(newJob)
                    localStorage.setItem("jobs", JSON.stringify(jobApply))
                    return toast.success("Apply done!!")
                }

            }else{
                jobApply.push(newJob);
                localStorage.setItem("jobs", JSON.stringify(jobApply))
                return toast.success("Apply done!!")
            }      

            
        }
    return (
        <div className='job-details'>
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
                    <p><FontAwesomeIcon icon={faDollar} />  <b>Salary: </b>{newJob?.salary}</p>
                    <p><FontAwesomeIcon icon={faCalendarDays} />  <b>Job Title : </b>{newJob?.details?.title}</p>
                    <br />
                    <h3><b>Contact Information</b></h3>
                    <hr /> <br />
                    <p><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>   <b>Phone : </b>{newJob?.details?.phone}</p>
                    <p><FontAwesomeIcon icon={faEnvelopeOpen} />  <b>Email : </b>{newJob?.details?.email}</p>
                    <p><FontAwesomeIcon icon={faLocationDot} /> <b>Address : </b>{newJob?.details?.address}</p>
                    <button onClick={()=>handelAppid(newJob)}>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;