import React from "react";
import img1 from '../img/img (1).png';
import img2 from '../img/img (5).png';
import Hero from '../img/hero3.jpg';
import "./styles/Process.css";

function Process() {
    return (
            <div className="container">
            <div className="row">
               
                <div className="image-container">
                <img src={Hero} className="img-fluid rounded shadow" alt="Hero Image" />
                <img src={img1} className="small-image" alt="Feature 1" />
                <img src={img2} className="small-image" alt="Feature 2" />
                <img src="" className="small-image" />
            </div>
               
               
                <div className="content-wrapper">
                <h2>How It's Done</h2>
                <p className="tagline">A seamless process to enhance your natural beauty.</p>
                <div className="steps-wrapper">
                    <div className="step-item">
                        <span className="step-number">1</span>
                        <span className="step-text">Upload Your Photo</span>
                    </div>
                    <div className="step-item">
                        <span className="step-number">2</span>
                        <span className="step-text">Watch the Magic Happen</span>
                    </div>
                    <div className="step-item">
                        <span className="step-number">3</span>
                        <span className="step-text">Save & Share Your Natural Look</span>
                    </div>
                </div>
            </div>
               
            </div>
        </div>
    );
}

export default Process;
