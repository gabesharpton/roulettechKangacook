import React from 'react';
import Header from '../Header/Header';

const AboutPizza = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div className='p-4 m-4'>
                    <h1>About Pizza</h1>
                    <p>
                        Pizza, as we know it today, has a rich and diverse history that dates back centuries. The roots of pizza can be traced to ancient civilizations, including the Egyptians, Greeks, and Romans, who all had versions of flatbreads with toppings. However, the modern concept of pizza began in Naples, Italy, during the late 18th and early 19th centuries. At that time, the poorer citizens of Naples often added tomatoes, which were brought to Europe from the Americas, to their yeast-based flatbreads. This simple yet delicious combination of dough, tomatoes, and other local ingredients became immensely popular, particularly among the working class.
                    </p>
                    <p>
                        The creation of the Margherita pizza in 1889 is a significant milestone in pizza history. According to popular lore, this pizza was named after Queen Margherita of Italy during her visit to Naples. The pizza maker, Raffaele Esposito, prepared a pizza featuring tomatoes, mozzarella cheese, and basil to represent the colors of the Italian flag—red, white, and green. Queen Margherita's approval of this dish helped elevate the status of pizza from a humble street food to a dish enjoyed by all classes, further solidifying its place in Italian cuisine.
                    </p>
                    <p>
                        Pizza's journey to international fame began with the wave of Italian immigrants to the United States in the late 19th and early 20th centuries. These immigrants brought their culinary traditions with them, and pizzerias began to sprout in cities like New York and Chicago. The post-World War II era saw a significant boom in pizza's popularity in the United States, thanks to returning soldiers who had developed a taste for the dish while stationed in Italy. Over time, pizza evolved and adapted to local tastes, resulting in a plethora of styles and variations, from the thin-crust New York pizza to the deep-dish Chicago pizza. Today, pizza is a global phenomenon, beloved by millions and continuously evolving with new trends and innovations.
                    </p>
                </div>
            </div>
        </>
    );
};

export default AboutPizza;