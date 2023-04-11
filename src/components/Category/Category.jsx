import React from 'react';
import './Category.css'

const Category = (props) => {
    const {id, name, number, img} = props.category;
    return (
        <div className='category'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>{number}+ Jobs Available</p>
        </div>
    );
};

export default Category;