import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/UserHistory.css'; // Import the CSS file

const UserHistoryComponent = ({ userId }) => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        axios.get(`/api/user/${userId}/history`)
            .then(response => setHistory(response.data))
            .catch(error => console.error("Error fetching history:", error));
    }, [userId]);

    return (
        <div className="container">
            <h3 className="history-title">Your Skin Health History</h3>
            <table className="history-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Skin Health</th>
                        <th>Shades Tried</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.date}</td>
                            <td>{entry.skinHealth}</td>
                            <td>{entry.shades.join(", ")}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserHistoryComponent;
