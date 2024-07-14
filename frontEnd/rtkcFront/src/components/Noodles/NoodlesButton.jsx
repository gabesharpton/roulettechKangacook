import React, { useState } from 'react';

const NoodlesButton = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);

        // Make API call to Django backend here
        // You can use libraries like axios to make the API call
        // For example:
        // axios.post('/api/increment', { count: count + 1 })
        //   .then(response => {
        //     // Handle the response
        //   })
        //   .catch(error => {
        //     // Handle the error
        //   });
    };

    return (
        <button style={{ fontSize: '24px', padding: '10px 20px' }} onClick={handleClick}>
            Click me to add one to the API call count: {count}
        </button>
    );
};

export default NoodlesButton;