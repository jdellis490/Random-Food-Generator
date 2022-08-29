const foodAtHome = [ 
    'Buffalo Chicken Salad',
    'BBQ Chicken Pizza',
    'Korean BBQ Beef',
    'Spaghetti',
    'Baked Chicken',
    ];

const uberEats = [
    'Taco Bell',
    'McDonalds',
    'Chipotle',
    'Jack in The Box',
    'Thai Basil',
    'The Buffalo Spot',
    'Panda Express',
    'Ono Hawaiian BBQ',
    'Filibertos',
    'Samurai Sams',
    'Pita Jungle',
];

const makeThis = foodAtHome[Math.floor(Math.random() * foodAtHome.length)];

const treatYoSelf = uberEats[Math.floor(Math.random() * uberEats.length)];

const renderMeal = () => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const pickedNumber = [Math.floor(Math.random() * numbers.length)];
    
    if (pickedNumber <= 5) {
        console.log(makeThis);
    } else console.log(treatYoSelf);
}   

renderMeal();
