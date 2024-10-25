import React, { useState } from 'react';
import { motion } from 'framer-motion';
import hydratingFaceCream from '../img/hydratingfacecream.png'; // Adjust the path as necessary
import brighteningSerum from '../img/brighteningserum.png'; // Example import
import sunscreen from '../img/sunscreen.png'; // Example import
import styles from './styles/PersonalizedRecommendationsPage.css';

// Sample recommendations list
const recommendationsList = [
    {
        title: "Hydrating Face Cream",
        description: "A lightweight cream that provides deep hydration for all skin types.",
        image: hydratingFaceCream,
        link: "/products/hydrating-cream",
        skinType: "dry" // Example skin type
    },
    {
        title: "Brightening Serum",
        description: "A serum that brightens your complexion and reduces dark spots.",
        image: brighteningSerum,
        link: "/products/brightening-serum",
        skinType: "oily" // Example skin type
    },
    {
        title: "Sunscreen SPF 50",
        description: "Protect your skin from harmful UV rays with this broad-spectrum sunscreen.",
        image: sunscreen,
        link: "/products/sunscreen",
        skinType: "all" // Suitable for all skin types
    },
    // Add more recommendations as needed
];

const PersonalizedRecommendationsPage = () => {
    const [selectedSkinType, setSelectedSkinType] = useState('all'); // Default to 'all'
    
    // Define animation variants
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    // Filter recommendations based on the selected skin type
    const filteredRecommendations = recommendationsList.filter(recommendation => 
        recommendation.skinType === selectedSkinType || recommendation.skinType === 'all'
    );

    return (
        <div className={`${styles.container} my-5`}>
            <div className={`${styles.header} text-center mb-4`}>
                <h2 className={styles.heading}>Personalized Recommendations</h2>
                <p className={styles.tagline}>Get products and routines based on your unique skin profile.</p>
            </div>
            <div className={`${styles.selectionContainer} text-center mb-4`}>
                <label htmlFor="skinType" className={styles.label}>Select Your Skin Type:</label>
                <select 
                    id="skinType" 
                    value={selectedSkinType} 
                    onChange={(e) => setSelectedSkinType(e.target.value)} 
                    className={styles.select}
                >
                    <option value="all">All Skin Types</option>
                    <option value="dry">Dry Skin</option>
                    <option value="oily">Oily Skin</option>
                    <option value="combination">Combination Skin</option>
                </select>
            </div>
            <motion.div 
                className={styles.content} 
                initial="hidden" 
                animate="visible" 
                variants={variants} 
                transition={{ duration: 0.3 }}
            >
                <div className={styles.recommendationsList}>
                    {filteredRecommendations.map((recommendation, index) => (
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