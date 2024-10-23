import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import Navbar from '../components/Navbar';
import svg from '../img/gifs (1).svg';
import img1 from '../img/bg1.png'; // Ensure this path is correct
import './styles/Healthcare.css';

const healthcareTips = [
    { title: "Daily Skincare Routine", description: "Cleanse, tone, and moisturize twice a day for glowing skin." },
    { title: "Hydration is Key", description: "Drink at least 8 glasses of water daily to keep your skin hydrated." },
    { title: "Balanced Diet", description: "Eat a diet rich in fruits, vegetables, and omega-3 fatty acids for healthy skin." },
    { title: "Sun Protection", description: "Always apply sunscreen with SPF 30 or higher to protect your skin from UV rays." }
];

const HealthcarePage = () => {
    // Define animation variants
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
            <Navbar />
            <div className="healthcare-container">
                <div className="node_one"><img src={img1} alt="Decoration 1" /></div>
                <div className="node_two"><img src={img1} alt="Decoration 2" /></div>
                <div className="node_three"><img src={img1} alt="Decoration 3" /></div>
                <div className="node_four"><img src={img1} alt="Decoration 4" /></div>

                <img src={svg} className="headerImage text-center mb-4" alt="Header Decoration" />
                <h2 className="text-center mb-4">Healthcare Tips</h2>
                
                <div className='row'>
                    <div className="healthcare-cards">
                        {healthcareTips.map((tip, index) => (
                            <motion.div 
                                key={index} 
                                className="healthcare-card" 
                                initial="hidden" 
                                animate="visible" 
                                variants={variants} 
                                transition={{ duration: 0.3, delay: index * 0.1 }} // Stagger the animations
                            >
                                <h3>{tip.title}</h3>
                                <p>{tip.description}</p>
                            </motion.div>
                        ))}
                    </div>
                    <div className="healthcare-cards">
                        {healthcareTips.map((tip, index) => (
                            <motion.div 
                                key={index} 
                                className="healthcare-card" 
                                initial="hidden" 
                                animate="visible" 
                                variants={variants} 
                                transition={{ duration: 0.3, delay: index * 0.1 }} // Stagger the animations
                            >
                                <h3>{tip.title}</h3>
                                <p>{tip.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HealthcarePage;