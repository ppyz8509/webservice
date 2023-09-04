import React from 'react'

const Categories = ({ allCategories ,filteritems }) => {
    return (
        <div className='btn-container'>
            {
                allCategories.map((category, index) => {
                    return (
                        <button className='filter-btn' key={index}onClick={()=>filteritems(category)}>
                            {category}
                        </button>
                    );
                })}
        </div>
    )
}

export default Categories