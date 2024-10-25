// src/pages/MarriageParty.jsx
import React, { useState, useEffect } from 'react';
import CameraTry from '../../components/cameraTry'; // Your camera try-on component
import MakeupList from './makeuplist';
import './marriageparty.css';

function MarriageParty() {
    const [makeupStyles, setMakeupStyles] = useState([]);
    const [selectedSkinTone, setSelectedSkinTone] = useState("All");

    // Fetch recommended makeup styles
    const fetchMakeupStyles = async (skinTone) => {
        const response = await fetch(`/api/makeupStyles?event=Marriage Party&skinTone=${skinTone}`);
        const data = await response.json();
        setMakeupStyles(data);
    };

    useEffect(() => {
        fetchMakeupStyles(selectedSkinTone);
    }, [selectedSkinTone]);

    const handleSkinToneChange = (e) => {
        setSelectedSkinTone(e.target.value);
    };

    return (
        <div className="marriage-party-container">
            <h2 className="title">Marriage Party Makeup</h2>
            <p className="description">
                Discover makeup styles to make you look stunning for the marriage celebration!
            </p>

            <div className="filter-section">
                <label htmlFor="skinToneSelect">Choose Your Skin Tone:</label>
                <select
                    id="skinToneSelect"
                    value={selectedSkinTone}
                    onChange={handleSkinToneChange}
                >
                    <option value="All">All</option>
                    <option value="Fair">Fair</option>
                    <option value="Medium">Medium</option>
                    <option value="Olive">Olive</option>
                    <option value="Dark">Dark</option>
                </select>
            </div>

            <div className="camera-section">
                <h3>Try On Makeup</h3>
                <CameraTry />
            </div>

            <div className="makeup-list-section">
                <h3>Recommended Makeup Styles for {selectedSkinTone} Skin Tone</h3>
                <MakeupList makeupStyles={makeupStyles} />
            </div>
        </div>
    );
}

export default MarriageParty;
