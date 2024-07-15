import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PizzaButton = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetchCount();
    }, []);

    const fetchCount = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/pizzaOrNoodles/');
            console.log('Fetch response:', response);
            setCount(response.data.count);
        } catch (error) {
            console.error('Error fetching count:', error);
        }
    };

    const incrementCount = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/pizzaOrNoodles/');
            console.log('Increment response:', response);
            setCount(response.data.count);
        } catch (error) {
            console.error('Error updating count:', error);
        }
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={incrementCount}>Increment</button>
        </div>
    );
};

export default PizzaButton;