import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import Navbar from '../components/Navbar';
import featureImage1 from '../img/img (2).png';
import featureImage2 from '../img/product.jpeg';
import featureImage3 from '../img/add.webp';
import featureImage4 from '../img/close.webp';
import img7 from "../img/gifs (7).svg";
import styles from './styles/FeaturesPage.module.css';

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
    },
    {
        title: "PERSONALIZED RECOMMENDATIONS",
        description: "Get products and routines based on your unique skin profile.",
        image: featureImage4,
        link: '/personalized-recommendations'
    },
    {
        title: "AI-POWERED ANALYSIS",
        description: "Leverage AI to analyze your skin health and suggest improvements.",
        image: featureImage3,
        link: '/ai-powered-analysis'
    }
];

const FeaturesPage = () => {
    // Define animation variants
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
            <Navbar />
            <div className={`${styles.containerFeatures} my-5 container`}>
                <div className={`${styles.header} text-center mb-4`}>
                    <img src={img7} alt="Header Graphic" className={`${styles.headerImage} text-center mb-4`} />
                    <h2 className={styles.heading}>Our Features</h2>
                    <p className={styles.tagline}>Discover the perfect blend of beauty and technology.</p>
                </div>
                <div className={`${styles.featuresList}`}>
                    {featuresList.map((feature, index) => (
                        <motion.div 
                            key={index} 
                            className={`${styles.featureItem} ${index % 2 === 0 ? styles.reverseLayout : ''}`} 
                            initial="hidden" 
                            animate="visible" 
                            variants={variants} 
                            transition={{ duration: 0.3 }} // Duration of the animation
                        >
                            <div className={styles.featureContent}>
                                <div className={styles.featureImageWrapper}>
                                    <img src={feature.image} alt={`${feature.title} Image`} className={styles.featureImage} />
                                </div>
                                <div className={styles.featureText}>
                                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                                    <p className={styles.featureDescription}>{feature.description}</p>
                                    <a href={feature.link} className={styles.featureBtn}>Try It On</a>
                                </div>
                            </div>
                            <hr className={styles.featureDivider} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default FeaturesPage;
