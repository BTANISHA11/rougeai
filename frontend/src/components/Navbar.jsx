import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';  // Ensure the CSS is imported

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark custom-navbar">
            <div className="container-fluid d-flex align-items-center justify-content-between">
                {/* Logo */}
                <Link 
                    className="navbar-brand logo-text" 
                    to="/" 
                    style={{
                        fontFamily: '"Updock", cursive',
                        fontWeight: 'bold',  // Bold logo text
                        fontSize: '2rem',
                        color: 'white',
                        marginRight: '20px' // Space between logo and links/buttons
                    }}
                >
                    Beauty Buzz
                </Link>

                {/* Links and Buttons Container */}
                <div className="navbar-links d-flex align-items-center">
                    <ul className="navbar-nav d-flex">
                        {['Home', 'Features', 'Healthcare', 'Occasions'].map((path, index) => (
                            <li className="nav-item" key={index}>
                                <Link 
                                    className="nav-link" 
                                    to={path === 'Home' ? '/' : `/${path.toLowerCase()}`} 
                                    style={{
                                        fontFamily: '"Updock", cursive',
                                        fontWeight: 'bold',  // Bold navigation text
                                        fontSize: '2rem',
                                        textDecoration: 'none',
                                        color: 'white',
                                        margin: '0 15px' // Horizontal margin between links
                                    }}
                                >
                                    {path}
                                </Link>
                            </li>
                        ))}
                    </ul>
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
                            margin: '0 10px', // Horizontal margin for buttons
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