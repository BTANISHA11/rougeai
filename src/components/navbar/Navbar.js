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
                    <ul className="navbar-nav mx-auto mb-2 mb-md-0" style={{ display: 'flex', flexDirection: 'row' }}>
                        {['/', '/features', '/healthcare', '/occasions'].map((path, index) => (
                            <li 
                                className="nav-item" 
                                key={index}
                                style={{ 
                                    margin: '0 10px', // Add margin for spacing
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
                                        color: '#E80071', // Default text color
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
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
