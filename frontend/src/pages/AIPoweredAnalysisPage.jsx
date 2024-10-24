import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import Navbar from '../components/Navbar';
// import aiImage from '../img/ai-powered-analysis.png'; // Example image for AI analysis
import styles from './styles/AIPoweredAnalysisPage.css';

const AIPoweredAnalysisPage = () => {
    // Define animation variants
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
            <Navbar />
            <div className={`${styles.container} my-5 container`}>
                <div className={`${styles.header} text-center mb-4`}>
                    <h2 className={styles.heading}>AI-Powered Analysis</h2>
                    <p className={styles.tagline}>Unlock the secrets of your skin with our advanced AI technology.</p>
                </div>
                <motion.div 
                    className={styles.content} 
                    initial="hidden" 
                    animate="visible" 
                    variants={variants} 
                    transition={{ duration: 0.3 }} // Duration of the animation
                >
                   
                    <p className={styles.description}>
                        Our AI analyzes your skin condition and provides personalized recommendations to enhance your skincare routine.
                    </p>
                    <a href="/get-analysis" className={styles.btn}>Get Your Analysis</a>
                </motion.div>
            </div>
        </>
    );
};

export default AIPoweredAnalysisPage;