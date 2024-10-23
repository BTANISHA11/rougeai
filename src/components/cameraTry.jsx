import React, { useEffect, useRef, useState } from 'react';
import './styles/cameraTry.css';
import img6 from "../img/gifs (6).svg"; // Placeholder image

function CameraTry() {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [isCameraOn, setIsCameraOn] = useState(false);

    useEffect(() => {
        if (isCameraOn) {
            startCamera();
        } else {
            stopCamera();
        }
    }, [isCameraOn]);

    const startCamera = () => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                videoRef.current.srcObject = stream;
                videoRef.current.play();
            })
            .catch(err => {
                console.error("Error accessing the camera: ", err);
            });
    };

    const stopCamera = () => {
        if (videoRef.current && videoRef.current.srcObject) {
            videoRef.current.srcObject.getTracks().forEach(track => track.stop());
        }
    };

    const applyMakeupEffect = () => {
        const canvas = canvasRef.current;
        const video = videoRef.current;
        const context = canvas.getContext('2d');

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Example: Add a simple lipstick effect
        context.beginPath();
        context.arc(canvas.width / 2, canvas.height / 1.8, 50, 0, Math.PI * 2, true);
        context.fillStyle = 'rgba(255, 0, 0, 0.5)';
        context.fill();

        // Example: Add more makeup effects here using context drawing methods
    };

    return (
        <div className="camera-try-container">
            {!isCameraOn && (
                <img src={img6} alt="Placeholder" className="camera-placeholder" />
            )}

            {isCameraOn ? (
                <div className="video-container">
                    <video ref={videoRef} className="video-feed"></video>
                    <canvas ref={canvasRef} className="makeup-overlay"></canvas>
                    <button className="btn stop-camera-btn" onClick={() => setIsCameraOn(false)}>
                        Turn Off Camera
                    </button>
                </div>
            ) : (
                <button className="btn start-camera-btn" onClick={() => setIsCameraOn(true)}>
                    Turn On Camera
                </button>
            )}
        </div>
    );
}

export default CameraTry;
