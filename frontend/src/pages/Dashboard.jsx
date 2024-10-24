import React, { useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode';  // If you haven't installed jwt-decode, run 'npm install jwt-decode'
import Navbar from '../components/LoginNavbar';
import './styles/Dashboard.css'; // Assuming you named the CSS file 'Dashboard.css'
import featureImage1 from '../img/hero1.png';
import featureImage2 from '../img/hero1.png';

import featuresData from '../data/featureData';
import eventsData from '../data/eventData';
import savedLooksData from '../data/savedLooksData';
import tryOnHistoryData from '../data/tryOnHistory';
import CameraTry from '../components/cameraTry';
import MakeupList from '../components/makeupList';
import './styles/Dashboard.css';

function Dashboard() {
    const [userName, setUserName] = useState('');
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = jwtDecode(token);
            setUserName(decodedToken.name);
        }
    }, []);

    const handleEventClick = (event) => {
        setSelectedEvent(event);
    };

    return (
        <>
            <Navbar />
            <div className="dashboard-content">
                <h1>Welcome, {userName}!</h1>

                {/* Profile Section */}
                <div className="profile-section">
                    <img src="/default-profile.jpg" alt="Profile" className="profile-pic" />
                    <button className="btn-update-profile">Update Profile</button>
                </div>

                {/* Features Section */}
                <div className="container">
                    <div className="row">
                        <div className="containerFeatures my-5">
                            <h2 className="text-center">Our Features</h2>
                            <p className="text-center tagline">Discover the perfect blend of beauty and technology.</p>
                            <div className="features-grid container">
                                {featuresData.map((feature, index) => (
                                    <div className="feature-card" key={index}>
                                        <img src={feature.image} className="feature-img" alt={`${feature.title} Image`} />
                                        <div className="card-body">
                                            <h3 className="card-title">{feature.title}</h3>
                                            <p className="card-text">{feature.description}</p>
                                            <a href={feature.link} className="btn feature-btn">Try It On</a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Saved Looks Section */}
                <div className="features-section">
                    <div className="feature-card">
                        <h2>My Saved Looks</h2>
                        <div className="saved-looks">
                            {savedLooksData.map((look) => (
                                <div key={look.id} className="saved-look">
                                    <h3>{look.title}</h3>
                                    <p>{look.description}</p>
                                    <p><strong>Products Used:</strong> {look.productsUsed.join(', ')}</p>
                                    <p><small>Saved on {look.dateSaved}</small></p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Try-On History Section */}
                    <div className="feature-card">
                        <h2>Try-On History</h2>
                        <div className="tryon-history">
                            {tryOnHistoryData.map((history) => (
                                <div key={history.id} className="tryon-item">
                                    <img src={history.image} alt="Try-on" />
                                    <p>Tried {history.productName} on {history.triedOnDate}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Occasion-Based Recommendations */}
                <div className="occasions-container">
                    <h2 className="text-center">Special Occasions</h2>
                    <p className="text-center tagline">Choose makeup for special events</p>

                    {selectedEvent && (
                        <div className="expanded-event-card">
                            <button className="back-button" onClick={() => setSelectedEvent(null)}>← Back</button>
                            <div className="expanded-content">
                                <div className="camera-try-wrapper">
                                    <CameraTry />
                                </div>
                                <div className="event-content">
                                    <h3 className="card-title">{selectedEvent.title}</h3>
                                    <p>{selectedEvent.description}</p>
                                    <MakeupList makeupStyles={selectedEvent.makeupStyles} />
                                </div>
                            </div>
                        </div>
                    )}

                    <div className={`grid-container ${selectedEvent ? 'hidden' : ''}`}>
                        {eventsData.map((event, index) => (
                            <div
                                key={index}
                                className="event-card"
                                onClick={() => handleEventClick(event)}
                            >
                                <h3 className="card-title">{event.title}</h3>
                                <p>{event.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="recent-activity">
                    <h2>Recent Activity</h2>
                    <p>You tried Lipstick X on [date]</p>
                    <p>Saved a look featuring Brand Y</p>
                </div>
            </div>
        </>
    );
}

export default Dashboard;