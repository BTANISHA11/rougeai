import React from 'react';
import { motion } from 'framer-motion';
import aiImage from '../img/ai-powered-analysis.png'; // Ensure the path is correct
import styles from './styles/AIPoweredAnalysisPage.css';

const AIPoweredAnalysisPage = () => {
    // Define animation variants
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className={`${styles.container} my-5`}>
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
                <div className={styles.imageContainer}>
                    <img src={aiImage} alt="AI Powered Analysis" className={styles.aiImage} />
                </div>
                <p className={styles.description}>
                    Our AI analyzes your skin condition and provides personalized recommendations to enhance your skincare routine.
                </p>
                <p className={styles.benefits}>
                    <strong>Benefits of AI-Powered Analysis:</strong>
                    <ul>
                        <li>Personalized skincare recommendations tailored to your skin type.</li>
                        <li>Insights into your skin health and areas for improvement.</li>
                        <li>Real-time analysis using advanced image recognition technology.</li>
                    </ul>
                </p>
                <a href="/get-analysis" className={styles.btn}>Get Your Analysis</a>
            </motion.div>
            
            {/* Testimonials Section */}
            <div className={styles.testimonials}>
                <h3 className={styles.testimonialsHeading}>What Our Users Say</h3>
                <div className={styles.testimonialItem}>
                    <p>"The AI analysis was spot on! I found products that actually work for my skin!"</p>
                    <cite>- Sarah K.</cite>
                </div>
                <div className={styles.testimonialItem}>
                    <p>"I love how personalized the recommendations are. My skin has never looked better!"</p>
                    <cite>- John D.</cite>
                </div>
            </div>

            {/* FAQ Section */}
            <div className={styles.faq}>
                <h3 className={styles.faqHeading}>Frequently Asked Questions</h3>
                <div className={styles.faqItem}>
                    <strong>How does the AI analysis work?</strong>
                    <p>The AI uses advanced algorithms to analyze your skin condition based on the image you provide.</p>
                </div>
                <div className={styles.faqItem}>
                    <strong>Is the analysis safe and private?</strong>
                    <p>Yes, your data is secure, and we prioritize your privacy.</p>
                </div>
            </div>
        </div>
    );
};

export default AIPoweredAnalysisPage;