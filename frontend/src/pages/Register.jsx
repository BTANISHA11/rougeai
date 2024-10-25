import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation after registration
import { motion } from 'framer-motion'; // Import motion
import img5 from "../img/gifs (5).svg"; // You can replace this with a relevant image for registration
import './styles/Register.css'; // You can create a separate CSS file for styling

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // To navigate to other pages

    const handleRegister = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:8000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Registration successful, navigate to login page or dashboard
                navigate('/login'); // Change '/login' to your desired route after registration
            } else {
                // Show error message if registration fails
                setError(data.message || 'Registration failed');
            }
        } catch (error) {
            console.error('Registration error:', error);
            setError('An error occurred. Please try again.');
        }
    };

    // Define the animation variants
    const variants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div 
            className="register-container py-5"
            initial="hidden" 
            animate="visible" 
            variants={variants} 
            transition={{ duration: 0.5 }} // Duration of the animation
        >
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <img src={img5} className='register-img' alt="Register visual" />
                    
                    <form onSubmit={handleRegister}>
                        <h2 className="text-center mb-2">Register</h2>
                        <p className="text-center tagline">~ Create your account to get started.</p>
                        
                        {error && <div className="alert alert-danger">{error}</div>}
                        
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Enter username" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                required
                            />
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="Enter email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required
                            />
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required
                            />
                        </div>
                        
                        <button type="submit" className="btn btn-custom w-100">Register</button>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default RegisterPage;