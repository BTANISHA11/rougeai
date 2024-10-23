import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Features from '../components/Features';
import HomeContent from '../components/HomeContent';
import Process from '../components/Process';

const HomePage = () => {
    const homeContentVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const featuresVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    const processVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
            <Navbar />
            <section 
                style={{
                    background: '#F05A7E', // Solid background color
                    minHeight: '100vh', // Full height of the viewport
                    padding: '20px', // Optional padding
                }}
            >
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    variants={homeContentVariants}
                    transition={{ duration: 0.6 }} // You can adjust the duration
                >
                    <HomeContent />
                </motion.div>
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    variants={featuresVariants}
                    transition={{ duration: 0.6 }} // You can adjust the duration
                >
                    <Features />
                </motion.div>
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    variants={processVariants}
                    transition={{ duration: 0.6 }} // You can adjust the duration
                >
                    <Process />
                </motion.div>
                <Footer />
            </section>
        </>
    );
};

export default HomePage;
