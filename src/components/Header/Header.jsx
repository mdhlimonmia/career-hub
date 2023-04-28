import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import {Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    const [open, setOpen] = useState(false);
   //  console.log(open)
    return (
       <div className='header'>
         <h3>Jobs Portal</h3>

         <div onClick={()=> setOpen(!open)}>
            <span>
               {
                  open === true ?
                  <XMarkIcon className='bar-icon'></XMarkIcon>
                  :<Bars3Icon className='bar-icon'></Bars3Icon>
               }
            </span>
         </div>
         <nav className={`nav-bar ${open ? 'open': 'close'}`}>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/statistics">Statistics</ActiveLink>
            <ActiveLink to="/applied">Applied Jobs</ActiveLink>
            <ActiveLink to="/blog">Blog</ActiveLink>
        </nav>
        <button>Apply Now</button>
       </div>
    );
};

export default Header;