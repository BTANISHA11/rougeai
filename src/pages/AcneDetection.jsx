import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import ImageEditor from '../components/ImageEditor';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UserHistoryComponent from '../components/UserHistoryComponent';
import './styles/AcneDetectionPage.css'; // Import the CSS file

const AcneDetectionPage = () => {
    // Define animation variants
    const variants = {
        hidden: { opacity: 0, y: 20 }, // Start slightly below and transparent
        visible: { opacity: 1, y: 0 },  // End position at original location and fully opaque
    };

    return (
        <>
            <Navbar />
            <motion.div 
                className="container py-5"
                initial="hidden" 
                animate="visible" 
                variants={variants} 
                transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
            >
                <h2 className="text-center mb-4">Find out the perfect Product for your skin</h2>
                <div className="row content-section">
                    <div className="para-content">
                        <p>Discover What's suitable for You,What your skin love to Carry! and What is necessary :D</p>
                    </div>  
                    <div className="col-md-6 image-editor-section">
                        <ImageEditor />
                    </div>
                </div>
                {/* Display the user history table below the image editor on smaller screens */}
                <div className="user-history-section mt-5">
                    <UserHistoryComponent />
                </div>
            </motion.div>
            <Footer />
        </>
    );
};

export default AcneDetectionPage;
