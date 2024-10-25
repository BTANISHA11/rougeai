import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';  // Adjust the path based on your folder structure
import './styles/Navbar.css';  // Ensure the CSS is imported

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark custom-navbar">
            <div className="container-fluid d-flex align-items-center justify-content-between">
                {/* Logo */}
                <Link to="/" className="navbar-brand logo-text">
                    <img 
                        src={logo} 
                        alt="Beauty Buzz Logo" 
                        style={{
                            height: '50px', // Adjust height as needed
                            marginRight: '20px'
                        }} 
                    />
                </Link>

                {/* Links Container */}
                <div className="navbar-links mx-auto d-flex justify-content-center">
                    <ul className="navbar-nav d-flex">
                        {['Home', 'Features', 'Healthcare', 'Occasions'].map((path, index) => (
                            <li className="nav-item" key={index}>
                                <Link 
                                    className="nav-link" 
                                    to={path === 'Home' ? '/' : `/${path.toLowerCase()}`} 
                                    style={{
                                        fontFamily: '"Updock", cursive',
                                        fontWeight: 'bold',
                                        fontSize: '1.5rem',
                                        textDecoration: 'none',
                                        color: 'white',
                                        margin: '0 20px'
                                    }}
                                >
                                    {path}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Buttons Container */}
                <div className="navbar-buttons d-flex">
                    <Link 
                        className="nav-link btn-login" 
                        to="/login" 
                        style={{
                            padding: '6px 12px',
                            color: 'white',
                            background: 'transparent',
                            textDecoration: 'none',
                            border: '1px solid white',
                            borderRadius: '5px',
                            fontSize: '1rem',
                            margin: '0 10px',
                            fontWeight: 'bold'
                        }}
                    >
                        Login
                    </Link>
                    <Link 
                        className="nav-link btn-register" 
                        to="/register" 
                        style={{
                            padding: '6px 12px',
                            color: 'white',
                            background: 'transparent',
                            textDecoration: 'none',
                            border: '1px solid white',
                            borderRadius: '5px',
                            fontSize: '1rem',
                            fontWeight: 'bold'
                        }}
                    >
                        Register
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;