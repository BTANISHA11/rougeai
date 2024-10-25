// src/components/MakeupList.jsx
import React from 'react';
import './makeuplist.css';

function MakeupList({ makeupStyles }) {
    return (
        <div className="makeup-list">
            {makeupStyles.map((style, index) => (
                <div key={index} className="makeup-card">
                    <img src={style.imageUrl} alt={style.name} />
                    <h4>{style.name}</h4>
                    <p>{style.description}</p>
                    <div className="price">Price: {style.priceRange}</div>
                </div>
            ))}
        </div>
    );
}

export default MakeupList;
