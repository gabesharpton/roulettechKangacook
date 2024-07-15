import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PizzaButton = () => {
    const [pizzaCount, setPizzaCount] = useState(0);

    useEffect(() => {
        fetchCount();
    }, []);

    const fetchCount = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/pizzaCounter/');
            console.log('Fetch response:', response);
            setPizzaCount(response.data.pizzaCount);
        } catch (error) {
            console.error('Error fetching count:', error);
        }
    };

    const incrementCount = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/pizzaCounter/');
            console.log('Increment response:', response);
            setPizzaCount(response.data.pizzaCount);
        } catch (error) {
            console.error('Error updating count:', error);
        }
    };

    return (
        <div style={{ display: 'inline-block', width: '400px', margin: '10px', padding: '20px', border: '1px solid black', borderRadius: '5px' }}>
            <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>Count: {pizzaCount}</h1>
            <button style={{ fontSize: '18px', padding: '10px 20px' }} onClick={incrementCount}>I like Pizza</button>
        </div>
    );
};

export default PizzaButton;