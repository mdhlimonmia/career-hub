import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import './Categories.css'

const Categories = () => {
    const [categories, setCategory]=useState([]);
    useEffect( ()=> {
        fetch('category.json')
        .then(res => res.json())
        .then(data => setCategory(data));
    },[]);
    return (
        <div>
            <h1>Job Category List</h1>
            <p>Explore Opportunities.Participate, Showcase Skills & Gain CV Points through online & offline opportunities of your interest & make your mark!</p>
            <div className='categories'>
                {
                    categories.map(category =><Category 
                        category ={category}
                        key ={category.id}
                        ></Category>
                        )
                }
            </div>
        </div>
    );
};

export default Categories;