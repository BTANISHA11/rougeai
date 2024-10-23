import React from 'react';
import featureImage1 from '../img/img (2).png';
import featureImage2 from '../img/img (4).png';
import "./styles/Features.css"

const featuresList = [
    {
        title: "LIMITLESS SHADES AND FINISHES",
        description: "Experiment with new finishes and play with colors to find the right match for you in just a few clicks.",
        image: featureImage1,
        link: '/shades-try-on'
    },
    {
        title: "SELECT ACCORDING TO OCCASSION",
        description: "Select your perfect makeup kit based on the occassion and purchase from top sites like Amazon and MyGlamm",
        image: featureImage2,
        link: '/acne-detection'
    }
];

const Features = () => {
    return (
        <div className="container">
            <div className="row">
            <div className="containerFeatures my-5">
                <h2 className="text-center">Our Features</h2>
                <p className="text-center tagline">Discover the perfect blend of beauty and technology.</p>
                <div className="features-grid container">
                    {featuresList.map((feature, index) => (
                        <div className="feature-card" key={index}>
                            <img src={feature.image} className="feature-img" alt={`${feature.title} Image`} />
                            <div className="card-body">
                                <h3 className="card-title">{feature.title}</h3>
                                <p className="card-text">{feature.description}</p>
                                <a href={feature.link} className="btn feature-btn">Try It On</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </div>

    );
};

export default Features;
