import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
       <div className='header'>
         <h3>Jobs Portal</h3>
         <nav>
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