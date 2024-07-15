import React from 'react';
import Header from '../Header/Header';
import PizzaButton from '../Pizza/PizzaButton';
import NoodlesButton from '../Noodles/NoodlesButton';


const HomePage = () => {
    return (
        <div>
            <Header/>
            <div className='container' style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ marginRight: '10px' }}>
                    <h1>Pizza</h1>
                    <PizzaButton/>
                </div>
                <div style={{ marginLeft: '10px' }}>
                    <h1>Noodles</h1>
                    <NoodlesButton/>
                </div>
            </div>
        </div>
    );
};

export default HomePage;