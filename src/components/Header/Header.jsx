import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import {Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false);
    console.log(open)
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
            <Link to="/">Home</Link>
            <Link to="/statistics">Statistics</Link>
            <Link to="/applied">Applied Jobs</Link>
            <Link to="/blog">Blog</Link>
        </nav>
        <button>Apply Now</button>
       </div>
    );
};

export default Header;