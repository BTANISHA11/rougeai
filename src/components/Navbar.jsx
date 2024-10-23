import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav 
            className="navbar navbar-expand-md navbar-light" 
            style={{
                background: 'repeating-linear-gradient(45deg, #F8BBD0 0%, #F8BBD0 10px, #E1BEE7 10px, #E1BEE7 20px)',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
            }}
        >
            <div className="container-fluid">
                {/* Logo */}
                <Link 
                    className="navbar-brand text-gray-800 font-bold" 
                    to="/" 
                    style={{
                        fontFamily: '"Updock", cursive',
                        fontWeight: 700,
                        fontStyle: 'normal',
                        fontSize:'2.8rem'
                    }}
                >
                    Beauty Buzz
                </Link>

                {/* Mobile Menu Button */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto mb-2 mb-md-0">
                        {['/', '/features', '/healthcare', '/occasions'].map((path, index) => (
                            <li 
                                className="nav-item" 
                                key={index}
                                style={{ 
                                    transition: 'transform 0.3s, color 0.3s',
                                    color: '#E80071', // Default text color
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Default background
                                    borderRadius: '5px', // Rounded corners
                                    padding: '5px 10px', // Padding for spacing
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                    e.currentTarget.style.color = '#FF6F91'; // Change color on hover
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.color = '#E80071'; // Reset color
                                }}
                            >
                                <Link 
                                    className="nav-link" 
                                    to={path} 
                                    style={{
                                        fontFamily: '"Updock", cursive',
                                        fontWeight: 700,
                                        fontStyle: 'normal',
                                        fontSize: '1.5rem',
                                        textDecoration: 'none',
                                        color: 'inherit', // Inherit color from li
                                    }}
                                >
                                    {path === '/' ? 'Home' : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* Login Button */}
                <div className="d-flex">
                    <Link 
                        className="nav-link btn-login" 
                        to="/login" 
                        style={{
                            display: 'inline-block',
                            padding: '10px 20px',
                            color: 'white',
                            background: 'linear-gradient(45deg, #E80071, #FF6F91)',
                            textDecoration: 'none',
                            borderRadius: '5px',
                            position: 'relative',
                            overflow: 'hidden',
                            transition: 'box-shadow 0.3s ease',
                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.5)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
                        }}
                    >
                        <span 
                            style={{
                                position: 'absolute',
                                top: '0',
                                left: '0',
                                right: '0',
                                bottom: '0',
                                background: 'rgba(255, 255, 255, 0.2)',
                                borderRadius: '5px',
                                animation: 'glitter 3s linear infinite',
                                pointerEvents: 'none',
                                mixBlendMode: 'overlay',
                            }}
                        />
                        <span 
                            style={{
                                position: 'absolute',
                                top: '-20%', 
                                left: '50%', 
                                color: 'white',
                                fontSize: '1.5rem', 
                                animation: 'comet 4s linear infinite', 
                                transform: 'translateX(-50%)',
                            }}
                        >
                            ☄️
                        </span>
                        Login
                    </Link>
                </div>
            </div>

            <style>
                {`
                    @keyframes glitter {
                        0% { transform: translateX(-100%); }
                        50% { transform: translateX(100%); }
                        100% { transform: translateX(-100%); }
                    }
                    @keyframes comet {
                        0% { top: -20%; left: 0%; opacity: 1; }
                        25% { top: 50%; left: 50%; opacity: 1; }
                        50% { top: 100%; left: 100%; opacity: 0; }
                        100% { top: -20%; left: 100%; opacity: 0; }
                    }
                `}
            </style>
        </nav>
    );
};

export default Navbar;
