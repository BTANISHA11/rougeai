import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import './styles/Footer.css'; // Assuming the CSS is placed in Footer.css

const Footer = () => {
    // Define animation variants
    const variants = {
        hidden: { opacity: 0, y: 20 }, // Start off slightly below and transparent
        visible: { opacity: 1, y: 0 },  // End position at original location and fully opaque
    };

    return (
        <motion.footer 
            className="footer bg-dark text-white"
            initial="hidden" 
            animate="visible" 
            variants={variants} 
            transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition with ease-out
        >
            <div className="container">
                <div className="row">
                    {/* About Section */}
                    <div className="col-md-4">
                        <h5 className="footer-title">About Maketeyon</h5>
                        <p className="footer-text">
                            Maketeyon is your go-to platform for personalized beauty solutions. Explore limitless shades, finishes, and skincare features designed just for you.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="col-md-4">
                        <h5 className="footer-title">Quick Links</h5>
                        <ul className="footer-links">
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/features">Features</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                            <li><a href="/login">Login</a></li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div className="col-md-4">
                        <h5 className="footer-title">Follow Us</h5>
                        <div className="social-links">
                            <a href="https://www.facebook.com" className="social-icon">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.twitter.com" className="social-icon">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com" className="social-icon">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com" className="social-icon">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <hr className="footer-divider" />

                <div className="row">
                    <div className="col text-center">
                        <p>&copy; 2024 Maketeyon. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
