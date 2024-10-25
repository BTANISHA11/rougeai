import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import './styles/Occasions.css';
import CameraTry from '../components/cameraTry';
import MakeupList from '../components/makeupList'; // Import the MakeupList component
import MarriageParty from './occasions/marriageparty';
const EventsList = [
    {
        title: "Marriage Party",
        description: "The inner urge to look as good as the bride, why not when we are here.",
        link: '/occasions/marriageparty',
    },
    {
        title: "Cocktail Party",
        description: "Want to go to a cocktail party and look all cocky? Try makeups from here.",
        link: '/cocktail-party',
    },
    {
        title: "Birthday Party",
        description: "Celebrate your special day with a stunning look that makes you shine.",
        link: '/birthday-party',
    },
    {
        title: "Prom Night",
        description: "Make a lasting impression on your prom night with the perfect makeup.",
        link: '/prom-night',
    },
    {
        title: "Bridal Shower",
        description: "Get ready for the bridal shower with elegant and charming makeup styles.",
        link: '/bridal-shower',
    },
    {
        title: "Family Reunion",
        description: "Look fabulous for your family gathering and capture beautiful memories.",
        link: '/family-reunion',
    },
    {
        title: "Corporate Event",
        description: "Professional makeup to help you stand out at your next business event.",
        link: '/corporate-event',
    },
    {
        title: "New Year's Eve Party",
        description: "Ring in the new year with glamorous makeup that dazzles.",
        link: '/new-year-party',
    },
    {
        title: "Themed Costume Party",
        description: "Express yourself with creative makeup for themed parties.",
        link: '/costume-party',
    },
    // Add more events as needed
];

function Occasions() {
    const navigate = useNavigate(); // Initialize navigate hook
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [makeupStyles, setMakeupStyles] = useState([]);

    const handleEventClick = (event) => {
        // Navigate to the specific link when an event card is clicked
        navigate(event.link);
    };

    // Define animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="occasions-container">
            <h2 className="text-center">Special Occasions</h2>
            <p className="text-center tagline">Choose makeup for special events</p>

            <div className="grid-container">
                {EventsList.map((event, index) => (
                    <motion.div
                        key={index}
                        className="event-card"
                        onClick={() => handleEventClick(event)} // Trigger navigation on click
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
    );
}

export default Occasions;
