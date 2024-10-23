import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './styles/DashboardNavbar.css';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login'; // Redirect to login page after logout
    };

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="project-name">
                    <h2>Project Name</h2> {/* Replace with your project name */}
                </div>

                <div className="user-section" onClick={toggleDropdown}>
                    <FaUserCircle className="user-icon" size={28} />
                    {isDropdownOpen && (
                        <div className="dropdown-menu">
                            <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
