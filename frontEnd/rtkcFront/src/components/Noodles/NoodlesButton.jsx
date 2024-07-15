import React, { useState } from 'react';

const NoodlesButton = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
            
        
    };

    return (
        <button style={{ fontSize: '24px', padding: '10px 20px' }} onClick={handleClick}>
            Click me to add one to the API call count: {count}
        </button>
    );
};

export default NoodlesButton;