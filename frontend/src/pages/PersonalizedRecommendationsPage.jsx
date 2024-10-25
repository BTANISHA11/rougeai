import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import styles from './styles/PersonalizedRecommendationsPage.css';
import hydratingFaceCream from '../img/hydratingfacecream.png'

const recommendationsList = [
    {
        title: "Hydrating Face Cream",
        description: "A lightweight cream that provides deep hydration for all skin types.",
        image: hydratingFaceCream, // Use the imported variable
        link: "/products/hydrating-cream"
    },
    {
        title: "Brightening Serum",
        description: "A serum that brightens your complexion and reduces dark spots.",
        image: "path/to/brightening-serum.png", // Replace with actual image path
        link: "/products/brightening-serum"
    },
    {
        title: "Sunscreen SPF 50",
        description: "Protect your skin from harmful UV rays with this broad-spectrum sunscreen.",
        image: "path/to/sunscreen.png", // Replace with actual image path
        link: "/products/sunscreen"
    },
    {
        title: "Revitalizing Eye Cream",
        description: "An eye cream that reduces puffiness and dark circles.",
        image: "path/to/eye-cream.png", // Replace with actual image path
        link: "/products/revitalizing-eye-cream"
    },
    {
        title: "Nourishing Night Mask",
        description: "A rich mask that revitalizes your skin overnight.",
        image: "path/to/night-mask.png", // Replace with actual image path
        link: "/products/nourishing-night-mask"
    },
    {
        title: "Exfoliating Scrub",
        description: "Gently exfoliates to reveal smoother, brighter skin.",
        image: "path/to/exfoliating-scrub.png", // Replace with actual image path
        link: "/products/exfoliating-scrub"
    },
    // Add more recommendations as needed
];

const PersonalizedRecommendationsPage = () => {
    // Define animation variants
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className={`${styles.container} my-5`}>
            <div className={`${styles.header} text-center mb-4`}>
                <h2 className={styles.heading}>Personalized Recommendations</h2>
                <p className={styles.tagline}>Tailored just for you based on your unique skin profile.</p>
            </div>
            <motion.div 
                className={styles.content} 
                initial="hidden" 
                animate="visible" 
                variants={variants} 
                transition={{ duration: 0.3 }} // Duration of the animation
            >
                <div className={styles.recommendationsList}>
                    {recommendationsList.map((recommendation, index) => (
                        <div key={index} className={styles.recommendationItem}>
                            <img src={recommendation.image} alt={recommendation.title} className={styles.recommendationImage} />
                            <h3 className={styles.recommendationTitle}>{recommendation.title}</h3>
                            <p className={styles.recommendationDescription}>{recommendation.description}</p>
                            <a href={recommendation.link} className={styles.recommendationBtn}>View Product</a>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default PersonalizedRecommendationsPage;