import React from 'react';
import video from "../assets/buzz.mp4"; // Adjust this path as necessary
import './styles/Homecontent.css'; // Assuming you place the CSS code in a file named HomeContent.css

const HomeContent = () => {
    return (
        <div className="relative h-screen overflow-hidden">
<div style={{ position: 'relative', height: '670px' }}> {/* Set a fixed height for the container */}
    <video
        style={{ height: '100%', width: '100%', objectFit: 'cover' }} // Cover the container
        autoPlay
        loop
        muted
    >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
</div>


<div className="overlay flex items-start justify-start h-[calc(100vh-60px)] p-8" style={{ position: 'absolute', top: '60px', left: '0', right: '0' }}>
    <div className="text-left text-white">
        <h1 
            className="font-bold" 
            style={{ fontSize: '5rem' }}
        >
            Makeup Try-on
        </h1>
        <p 
            className="mt-4" 
            style={{ fontSize: '2rem' }}
        >
            ~See Your True Beauty Unveiled
        </p>
        <div className="mt-6">
        <button 
    className="btn btn-success btn-lg" 
    style={{ fontSize: '2.5rem', padding: '1rem 3rem', display: 'flex', alignItems: 'center' }}
>
    Get Started Now 
    <span style={{ marginLeft: '10px', fontSize: '2rem' }}>&#8594;</span> {/* Right arrow */}
</button>

        </div>
    </div>
</div>


        </div>
    );
};

export default HomeContent;
