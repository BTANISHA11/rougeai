import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion
import Navbar from '../components/Navbar';
import './styles/Occasions.css';
import CameraTry from '../components/cameraTry';
import MakeupList from '../components/makeupList'; // Import the MakeupList component

const EventsList = [
    {
        title: "Marriage Party",
        description: "The inner urge to look as good as the bride, why not when we are here.",
        link: '/shades-try-on',
    },
    {
        title: "Cocktail Party",
        description: "Want to go to a cocktail party and look all cocky? Try makeups from here.",
        link: '/acne-detection',
    },
    // Add more events as needed
];

function Occasions() {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [makeupStyles, setMakeupStyles] = useState([]);

    const handleEventClick = (event) => {
        if (selectedEvent?.title === event.title) {
            setSelectedEvent(null);
            setMakeupStyles([]); // Clear the makeup styles when the event is deselected
        } else {
            setSelectedEvent(event);
            fetchMakeupStyles(event); // Fetch makeup styles for the selected event
        }
    };

    const fetchMakeupStyles = async (event) => {
        // Mock fetching data from backend based on the selected event
        // Replace this with an actual API call
        const response = await fetch(`/api/makeupStyles?event=${event.title}`);
        const data = await response.json();
        setMakeupStyles(data);
    };

    // Define animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const expandedCardVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: { opacity: 1, height: 'auto' },
    };

    return (
        <>
            <Navbar />
            <div className="occasions-container">
                <h2 className="text-center">Special Occasions</h2>
                <p className="text-center tagline">Choose makeup for special events</p>

                <motion.div
                    initial="hidden"
                    animate={selectedEvent ? "visible" : "hidden"}
                    variants={expandedCardVariants}
                    transition={{ duration: 0.3 }}
                    className="expanded-event-card"
                >
                    {selectedEvent && (
                        <>
                            <button className="back-button" onClick={() => setSelectedEvent(null)}>← Back</button>
                            <div className="expanded-content">
                                <div className="camera-try-wrapper">
                                    <CameraTry />
                                </div>
                                <div className="event-content">
                                    <h3 className="card-title">{selectedEvent.title}</h3>
                                    <p>{selectedEvent.description}</p>
                                    <MakeupList makeupStyles={makeupStyles} /> {/* Render makeup styles */}
                                </div>
                            </div>
                        </>
                    )}
                </motion.div>

                <div className={`grid-container ${selectedEvent ? 'hidden' : ''}`}>
                    {EventsList.map((event, index) => (
                        <motion.div
                            key={index}
                            className="event-card"
                            onClick={() => handleEventClick(event)}
                            initial="hidden"
                            animate="visible"
                            variants={cardVariants}
                            transition={{ duration: 0.3, delay: index * 0.1 }} // Staggered animation
                        >
                            <h3 className="card-title">{event.title}</h3>
                            <p>{event.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Occasions;
