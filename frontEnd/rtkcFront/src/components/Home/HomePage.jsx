import React from 'react';
import Header from '../Header/Header';
import PizzaButton from '../Pizza/PizzaButton';
import NoodlesButton from '../Noodles/NoodlesButton';


const HomePage = () => {
    return (
        <div>
        <Header/>
        
            <div className='container'>
                <h1>Pizza</h1>
                <PizzaButton/>
        </div>
        <div className='container'>
            <h1>Noodles</h1>
            <NoodlesButton/>
            </div>
        </div>
    );
};

export default HomePage;