import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation after login
import { motion } from 'framer-motion'; // Import motion
import img5 from "../img/gifs (5).svg";
import './styles/Login.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // To navigate to other pages

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:8000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Save the token in local storage
                localStorage.setItem('token', data.token);
                
                // Redirect to homepage or dashboard
                navigate('/dashboard'); // Change '/dashboard' to your protected route
                
            } else {
                // Show error message if login fails
                setError(data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Login error:', error);
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
            className="login-container py-5"
            initial="hidden" 
            animate="visible" 
            variants={variants} 
            transition={{ duration: 0.5 }} // Duration of the animation
        >
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <img src={img5} className='login-img' alt="Login visual" />
                    
                    <form onSubmit={handleLogin}>
                        <h2 className="text-center mb-2">Login</h2>
                        <p className="text-center tagline">~ Welcome Back! Please login to continue.</p>
                        
                        {error && <div className="alert alert-danger">{error}</div>}
                        
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
                        
                        <button type="submit" className="btn btn-custom w-100">Submit</button>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default LoginPage;
