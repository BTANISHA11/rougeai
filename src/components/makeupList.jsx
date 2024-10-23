import React from 'react';
import './styles/MakeupList.css';

function MakeupList({ makeupStyles }) {
    return (
        <div className="makeup-list-container">
            <h3 className="text-center">Recommended Makeup Styles</h3>
            <div className="makeup-grid">
                {makeupStyles.map((style, index) => (
                    <div key={index} className="makeup-box">
                        <img src={style.imageUrl} alt={style.name} className="makeup-image" />
                        <div className="makeup-info">
                            <h4 className="makeup-title">{style.name}</h4>
                            <p className="makeup-description">{style.description}</p>
                            <h5>Products:</h5>
                            <ul>
                                {style.products.map((product, idx) => (
                                    <li key={idx}>{product.name} - ${product.price}</li>
                                ))}
                            </ul>
                            <p><strong>Total Cost: ${style.totalCost}</strong></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MakeupList;
