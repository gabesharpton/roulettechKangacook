import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NoodlesButton = () => {
    const [noodleCount, setnoodleCount] = useState(0);

    useEffect(() => {
        fetchCount();
    }, []);

    const fetchCount = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/noodleCounter/');
            console.log('Fetch response:', response);
            setnoodleCount(response.data.noodleCount);
        } catch (error) {
            console.error('Error fetching count:', error);
        }
    };

    const incrementCount = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/noodleCounter/');
            console.log('Increment response:', response);
            setnoodleCount(response.data.noodleCount);
        } catch (error) {
            console.error('Error updating count:', error);
        }
    };

    return (
        <div style={{ display: 'inline-block', width: '400px', margin: '10px', padding: '20px', border: '1px solid black', borderRadius: '5px' }}>
            <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>Count: {noodleCount}</h1>
            <button style={{ fontSize: '18px', padding: '10px 20px' }} onClick={incrementCount}>I like Noodles</button>
        </div>
    );
};

export default NoodlesButton;